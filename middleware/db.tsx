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

async function query(): Promise<any> {
  const db: Db = await connect(process.env.MONGODB_URI)
  const col  = db.collection(process.env.DB_COL_NAME)

  let res: Promise<any>[] = await col.find({},
                                           {projection: {_id: 0}}
                                          ).limit(3).toArray()
  return res
}

export default query; 

