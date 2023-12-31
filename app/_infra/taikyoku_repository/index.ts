import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { Taikyoku } from "@/domain/Taikyoku";
import { TaikyokuId } from "@/domain/Taikyoku/TaikyokuId";
import { ITaikyokuRepository } from "~/domain/Taikyoku/taikyoku_repository.interface";
import { UserId } from '@/domain/User/UserId';

export class TaikyokuRepository implements ITaikyokuRepository {
  private _dbClient: DynamoDBClient

  constructor() {
    this._dbClient = new DynamoDBClient({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
      region: 'ap-northeast-1',
      endpoint: 'http://localhost:8000',
    })
  }

  async create(taikyoku: Taikyoku): Promise<void> {
    // user登録イベントを発行
    const putCommand = new PutItemCommand({
      TableName: 'shogi_events',
      Item: {
        event_id: { S: taikyoku.id.value },
        event_type: { S: 'CreatedTaikyoku' },
        taikyoku_id: { S: taikyoku.id.value },
        taikyoku_name: { S: taikyoku.name },
        taikyoku_comment: { S: taikyoku.comment },
        // sente_id: { S: taikyoku.senteId?.value },
        // gote_id: { S: taikyoku.goteId?.value },
      },
      // ConditionExpression: 'attribute_not_exists(event_id)'
    })
    console.log({ putCommand })
    const output = await this._dbClient.send(putCommand)
    console.log({ output })
  }

  async findByTaikyokuId (id: TaikyokuId): Promise<Taikyoku | undefined> {
    const command = new GetItemCommand({
      TableName: 'shogi_events',
      Key: {
        event_id: { S: id.value },
        event_type: { S: 'CreatedTaikyoku' }
      },
    })
    const output = await this._dbClient.send(command)
    console.log({ output })
    console.log({ Item: output.Item })
    const item = output.Item
    // ユーザーが存在しない場合はundefinedを返す
    if (item == undefined) return undefined

    const taikyoku = new Taikyoku({
      id: new TaikyokuId(item.taikyoku_id.S as string),
      name: item.taikyoku_name.S as string,
      comment: item.taikyoku_comment.S as string,
      senteId: new UserId( item.sente_id?.S as string),
      goteId: new UserId(item.gote_id?.S as string),
    })
    return taikyoku
  }
}
