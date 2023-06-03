import {users} from "@/models/users";
import {mongooseConnect} from "@/lib/mongoose";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req,res);

  try {
    const usersCount = await users.countDocuments();

    res.status(200).json({ count: usersCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users count' });
  }

}