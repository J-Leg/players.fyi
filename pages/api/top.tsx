import middleware from '../../middleware/db'
import nextConnect from 'next-connect';

interface ExtendedRequest {db: any };

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: ExtendedRequest, res: any) => {
  const doc = await req.db.collection(process.env.STATS_COL).findOne();
  res.status(200).json(doc);
});

export default handler;
