const jwt = require("jsonwebtoken");
const { encryptKey, refreshEncryptKey } = process.env;

// const createTokens = (user) => {
//   const accessToken = jwt.sign({ user: user }, encryptKey, {
//     expiresIn: "1h",
//   });

//   const refreshToken = jwt.sign({ user: user }, refreshEncryptKey, {
//     expiresIn: "7d",
//   });

//   return { accessToken, refreshToken };
// };

const createTokens = (user) => {
  const now = Date.now();
  const expirationTime = now + 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  const accessToken = jwt.sign(
    { user: user, createdAt: now, expiresIn: expirationTime },
    encryptKey
  );

  const refreshToken = jwt.sign({ user: user }, refreshEncryptKey, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "No token provided" });
  } else {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, encryptKey, (err, data) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          const refreshToken = req.headers["x-refresh-token"];
          if (!refreshToken) {
            return res.status(401).send({ msg: err.message });
          } else {
            renewAccessToken(refreshToken)
              .then((newToken) => {
                req.headers.authorization = "Bearer " + newToken;
                next();
              })
              .catch((err) => {
                return res.status(403).send({ msg: "Invalid refresh token" });
              });
          }
        } else {
          return res.status(403).send({ msg: "Invalid token" });
        }
      } else {
        next();
      }
    });
  }
};

const renewAccessToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, refreshEncryptKey, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const user = data.user;
        const accessToken = jwt.sign({ user: user }, encryptKey, {
          expiresIn: "1h",
        });
        resolve(accessToken);
      }
    });
  });
};

// const veryfyToken = (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).send({ msg: "No token provided" });
//   } else {
//     const token = req.headers.authorization;
//     jwt.verify(token, encryptKey, (err, data) => {
//       console.log(token);
//       if (err) {
//         return res.status(403).send({ msg: err });
//       } else if (data.isAdmin === true) {
//         next();
//       } else {
//         return res.status(403).send({ msg: "Invalid " });
//       }
//     });
//   }
// };

module.exports = {
  verifyToken,
  createTokens,
};
