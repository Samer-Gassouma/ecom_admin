import {Group_Product} from "@/models/Group_Product";
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Group_Product.findOne({_id:req.query.id}));
    } else {
      res.json(await Group_Product.find());
    }
  }

  if (method === 'POST') {
    const {title,description,price,images,category,properties,Group_Prod} = req.body;
    const productDoc = await Group_Product.create({
      title,description,price,images,category,properties,Group_Prod,
    })
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const {title,description,price,images,category,properties,_id,Group_Prod} = req.body;
    await Group_Product.updateOne({_id}, {title,description,price,images,category,properties,Group_Prod,});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Group_Product.deleteOne({_id:req.query?.id});
      res.json(true);
    }
  }
}