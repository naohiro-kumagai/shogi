import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { User } from "~/domain/User";
import { UserId } from '~/domain/User/UserId';
import { Registrant } from '~/domain/User/Registrant';
import { IUserRepository } from "~/domain/User/user_repository.interface";

type UserRecord = {
  id: string
  name: string
}

export class UserRepository implements IUserRepository {
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

  async create(user: User): Promise<void> {
    // user登録イベントを発行
    const putCommand = new PutItemCommand({
      TableName: 'shogi_events',
      Item: {
        event_id: { S: user.id.value },
        event_type: { S: 'CreatedUser' },
        // payload: { S: JSON.stringify(user) },
        user_name: { S: user.name },
        user_id: { S: user.id.value },
      },
      // ConditionExpression: 'attribute_not_exists(event_id)'
    })
    console.log({ putCommand })
    const output = await this._dbClient.send(putCommand)
    console.log({ output })
  }

  async findById(id: UserId): Promise<User | undefined> {
    const command = new GetItemCommand({
      TableName: 'shogi_events',
      Key: {
        event_id: { S: id.value },
        event_type: { S: 'CreatedUser' }
      },
    })
    const output = await this._dbClient.send(command)
    console.log({ output })
    console.log({ Item: output.Item })
    const item = output.Item
    // ユーザーが存在しない場合はundefinedを返す
    if (item == undefined) return undefined

    const user: UserRecord = {
      id: item.user_id.S as string,
      name: item.user_name.S as string,
    }

    return new Registrant(user.name, new UserId(user.id as string))
  }
}
