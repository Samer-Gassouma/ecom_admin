import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req,res);

  
  
  try {
    const ProductCount = await Product.countDocuments();

    res.status(200).json({ count: ProductCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Product count' });
  }

}