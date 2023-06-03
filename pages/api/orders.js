import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await mongooseConnect();
    res.json(await Order.find().sort({ createdAt: -1 }));
  }
  if (req.method == "PUT") {
    const { id } = req.query;
    await mongooseConnect();
    await Order.updateOne(
      { _id: id },
      { paid: true }
    );
    
    
    res.json(true);
  }
}
