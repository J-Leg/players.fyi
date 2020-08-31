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

export async function queryTop(ceiling: number): Promise<any> {
  // Currently sort based on the metric in the 0th index in the mongo array.
  // It is a bit tricky to sort based on the last metric, so in the future will need to add
  // a dedicated document key for the "last" metric.
  //
  // As of now, this metric will be at most 90 days old.
  const db: Db = await connect(process.env.MONGODB_URI)
  const col  = db.collection(process.env.DB_COL_NAME)

  let res: Promise<any>[] = await col.find({},
                                           {projection: {_id: 0}}
                                          )
                                          .sort({"daily_metrics.player_count.0": -1})
                                          .limit(ceiling).toArray()
  return res
}

