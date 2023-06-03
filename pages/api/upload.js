import multiparty from 'multiparty';
import fs from 'fs';
import mime from 'mime-types';
import { mongooseConnect } from '@/lib/mongoose';
import { isAdminRequest } from '@/pages/api/auth/[...nextauth]';
import cloudinary from 'cloudinary';


cloudinary.config({
  cloud_name: 'dofdx05cx',
  api_key: '159453731192356',
  api_secret: 'FwHzwZiChixU3sbd91TkSqhZ6MU',
});

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  console.log('length:', files.file.length);
  const links = [];

  for (const file of files.file) {
    const ext = file.originalFilename.split('.').pop();
    const newFilename = Date.now() + '.' + ext;
    console.log('newFilename:', newFilename);
    console.log('file.originalFilename:', file.originalFilename);
    console.log('file.path:', file.path);
    const link = await uploadImage(file.path);
    links.push(link);
  }

  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};

const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath);
    console.log(result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};
