const cloudinary = require("cloudinary").v2;
const { cloud_name, api_key, api_secret } = process.env;

function uploadWidget() {

  cloudinary.openUploadWidget(
    {
      cloudName: cloud_name,
      api_key: api_key,
      api_secret: api_secret,
      uploadPreset: "<upload preset>",
      sources: [
        "local", 
        "url"
    ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      cropping: false,
      multiple: true,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#10173a",
          sourceBg: "#20304b",
          windowBorder: "#7171D0",
          tabIcon: "#79F7FF",
          inactiveTabIcon: "#8E9FBF",
          menuIcons: "#CCE8FF",
          link: "#72F1FF",
          action: "#5333FF",
          inProgress: "#00ffcc",
          complete: "#33ff00",
          error: "#cc3333",
          textDark: "#000000",
          textLight: "#ffffff",
        },
        fonts: {
          default: null,
          "'IBM Plex Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
            active: true,
          },
        },
      },
    },
    (err, info) => {
      if (!err) {
        console.log("Upload Widget event - ", info);
      }
    }
  );
}

module.exports = {
    uploadWidget
}