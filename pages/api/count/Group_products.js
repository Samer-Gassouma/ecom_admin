import {Group_Product} from "@/models/Group_Product";
import {mongooseConnect} from "@/lib/mongoose";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req,res);

  try {
    const GroupCount = await Group_Product.countDocuments();

    res.status(200).json({ count: GroupCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users count' });
  }

}