const cloudinary = require("cloudinary").v2;
const { cloud_name, api_key, api_secret } = process.env;
// const { Product } = require("../../db");
const fs = require("fs");

const uploadImage = async (req, res) => {
 
      console.log("acá");

    const { images } = req.file;

    //leer la ruta(path) de carga de la imagen
    const image = fs.readFileSync(images);
    
    // Configuration
    cloudinary.config({
      cloud_name: cloud_name,
      api_key: api_key,
      api_secret: api_secret,
      secure: true,
    });

    // Upload
    const result = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {
      public_id: "olympic_flag",
      folder: "UploadImages",
    });
    result.then((data) => {
        console.log(data);
        console.log(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    // Generate
    const url = cloudinary.url("olympic_flag", {
      width: 100,
      height: 150,
      Crop: "fill",
    });

    // The output url
    res.status(200).send("url image cloudinary created");
    console.log(url);

    //actualizo la imagen en la base de datos
    // await Product.update({
    //   images: [url],
    // });

 
};

module.exports = {
  uploadImage,
};


//server.use(fileUpload({
//   useTempFiles : true,
//   limits: { fileSize: 50 * 2024 * 1024 }
// }));