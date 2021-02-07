import jwt from "jsonwebtoken";

function signinToken(payload, secret, option) {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(payload, secret, option);
      resolve(token);
    } catch (err) {
      reject(err.message);
    }
  });
}

function verifyToken(token, secret) {
  return new Promise((resolve, reject) => {
    try {
      const decodeToken = jwt.verify(token, secret);
      resolve(decodeToken);
    } catch (err) {
      reject(err.message);
    }
  });
}

export { signinToken, verifyToken };
