const cloudinary = require("cloudinary").v2;
const { cloud_name, api_key, api_secret } = process.env;

const uploadImage = async (urlImages) => {
 
    cloudinary.config({
      cloud_name: cloud_name,
      api_key: api_key,
      api_secret: api_secret,
      secure: true,
    });
    
    // Upload
    const result = cloudinary.uploader.upload(urlImages, {
      // public_id: "olympic_flag",
      folder: "Images",
    });
    result.then((data) => {
        console.log("success", JSON.stringify(data, null, 2));
        return data.secure_url
      })
      .catch((err) => {
        console.log(err);
      });
    
    // Generate
    const url = cloudinary.url("Images", {
      width: 100,
      height: 150,
      Crop: "fill",
    });
    // console.log(typeof(url));
    // // The output url
    console.log(url);
    return (await result).secure_url;
    // // res.status(200).send("url image cloudinary created");
 
}; 

module.exports = {
    uploadImage
}
