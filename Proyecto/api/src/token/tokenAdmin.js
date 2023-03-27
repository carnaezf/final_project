const jwt = require("jsonwebtoken");
const { encryptKey } = process.env;

const veryfyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "No token provided" });
  } else {
    const token = req.headers.authorization;
    jwt.verify(token, encryptKey, (err, data) => {
      if (err) {
        return res.status(403).send({ msg: err.message });
      } else if (data.user.isAdmin === true) {
        next();
      } else {
        return res.status(403).send({ msg: "User ir nnot admin" });
      }
    });
  }
};

module.exports = {
  veryfyToken,
};
