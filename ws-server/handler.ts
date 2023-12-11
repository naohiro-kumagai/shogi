const ws = require('aws-lambda-ws-server')

// 接続IDをメモリに保存
let connections: string[] = []

// 棋譜をメモリに保存
const kifu: string[] = []

// const taikyokuList: Array<Taikyoku> = []
const taikyokuList: any[] = []

// const taikyokuRepository = new TaikyokuRepositoryDynamoDb('TaikyokuList')

// export const websocketApp = ws(
exports.websocketApp = ws(
  ws.handler({
    // 接続時に通る
    async connect (event: WebSocketEvent) {
      console.log('connection %s', event.id)
      connections.push(event.id)
      console.log(connections)
      return { statusCode: 200 }
    },

    // 切断時に通る
    async disconnect (event: WebSocketEvent) {
      console.log('disconnect %s', event.id)
      connections = connections.filter(id => id !== event.id)
      return { statusCode: 200 }
    },

    // 未定義の action を指定すると通る
    async default (event: WebSocketEvent) {
      console.log(event)
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('default message', connectionId, body)

      await postToConnection({ action: 'default', echo: body }, connectionId)

      return { statusCode: 200 }
    },

    // "taikyokuSave" アクションのハンドラ
    async taikyokuSave (event: WebSocketEvent) {
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('taikyokuSave', connectionId, body)

      // taikyokuRepository.save(body)
      taikyokuList.push(body)
      // const return_value = taikyokuList.map((t) => t.taikyokuId)
      const return_value = taikyokuList

      await Promise.all(connections.map(async (connection) => {
        await postToConnection({ action: 'taikyokuSave', echo: body, taikyokuList: return_value }, connection)
      }))

      return { statusCode: 200 }
    },

    // "taikyokuAll" アクションのハンドラ
    async taikyokuAll (event: WebSocketEvent) {
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('taikyokuAll', connectionId, body)
      const return_value = taikyokuList.map(t => t.taikyokuId)

      await postToConnection({ action: 'taikyokuAll', echo: body, taikyokuList: return_value }, connectionId)

      return { statusCode: 200 }
    },

    // "taikyokuFindBy" アクションのハンドラ
    async taikyokuFindBy (event: WebSocketEvent) {
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('taikyokuFindBy', connectionId, body)

      const taikyokuId = body

      console.log('taikyokuList:', taikyokuList)
      const return_value = taikyokuList.filter(t => t.taikyokuId.isEqual(taikyokuId))

      await Promise.all(connections.map(async (connection) => {
        await postToConnection({ action: 'taikyokuFindBy', echo: body, taikyokuList: return_value }, connection)
      }))

      return { statusCode: 200 }
    },

    // "kifuSave" アクションのハンドラ
    async kifuSave (event: WebSocketEvent) {
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('kifuSave', connectionId, body)

      kifu.push(body)

      await Promise.all(connections.map(async (connection) => {
        await postToConnection({ action: 'kifuSave', echo: body, kifu }, connection)
      }))

      return { statusCode: 200 }
    },

    // "kifuAll" アクションのハンドラ
    async kifuAll (event: WebSocketEvent) {
      const {
        id: connectionId,
        message: { body },
        context: { postToConnection }
      } = event

      console.log('kifuAll', connectionId, body)

      await postToConnection({ action: 'kifuAll', echo: body, kifu }, connectionId)

      return { statusCode: 200 }
    }
  })
)

/**
 * aws-lambda-ws-server に型定義がないので書いておく
 */
type WebSocketEvent = {
  id: string
  event: {
    requestContext: {
      routeKey: string
      eventType: 'CONNECT' | 'DISCONNECT' | 'MESSAGE'
      connectionId: string
    }
    multiValueHeaders: { [key: string]: string[] }
    body: string
  }
  context: {
    postToConnection: (body: any, connectionId: string) => Promise<void>
  }
  // message は any json だが、このプロジェクトでは常にこの形として定義する
  message: {
    action: string
    body: any
  }
}
