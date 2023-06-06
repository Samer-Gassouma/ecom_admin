import {Tag} from "@/models/Tag";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    res.json(await Tag.find());
  }

  if (method === 'POST') {
    const {name} = req.body;
    const categoryDoc = await Tag.create({
      name
    });
    res.json(categoryDoc);
  }

  if (method === 'PUT') {
    const {name,_id} = req.body;
    const categoryDoc = await Tag.updateOne({_id},{
      name
    });
    res.json(categoryDoc);
  }

  if (method === 'DELETE') {
    const {_id} = req.query;
    await Tag.deleteOne({_id});
    res.json('ok');
  }
}