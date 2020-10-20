import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

async function connect(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client: MongoClient = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  const db: Db = client.db(process.env.DB_NAME)

  cachedDb = db
  return db
}

export async function queryLast(ceiling: number): Promise<any> {
  const db: Db = await connect(process.env.DEV_URI)
  const col  = db.collection(process.env.DB_COL_NAME)

  let res: Promise<any>[] = await col.find({}).sort({"last_metric.player_count": -1})
                                              .limit(ceiling).toArray()
  return res
}

