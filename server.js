import app from "./app.js";
import { v2 as cloudinary } from "cloudinary"; //is a cloud-based image and video management service that provides a comprehensive solution for uploading, storing, manipulating, and delivering media assets. It offers a wide range of features and capabilities for handling images and videos in web and mobile applications.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
