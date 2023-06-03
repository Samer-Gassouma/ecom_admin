import {Order} from "@/models/Order";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req,res);

  
  
  try {
    const orderCount = await Order.countDocuments();

    res.status(200).json({ count: orderCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order count' });
  }

}