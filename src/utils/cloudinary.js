import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_APIKEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    //  file has been uploaded finally

    if (!response) {
      fs.unlinkSync(localfilePath); // Delete only if upload failed
      return null;
    }
    fs.unlinkSync(localfilePath); // Delete after successful upload
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath);
    return null;
  }
};

export { uploadOnCloudinary };
