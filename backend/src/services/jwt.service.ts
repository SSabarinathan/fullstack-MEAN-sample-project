import jwt from "jsonwebtoken";

const SECRET_KEY = "secretKeys";

class JWToken {
  generateToken = (userId: any) => {
    console.log(
      "----------------We are Inside the Token------------------------"
    );
    return new Promise((resolve, reject) => {
      const payload = { name: "JWT token" };
      const options = { expiresIn: "1h", audience: userId };
      jwt.sign(payload, SECRET_KEY, options, async (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });
  };
}

export const verifyToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  console.log("authheader", authHeader);
  let token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!", error: err });
    }
    req.userId = decoded.id;
    next();
  });
};

export const verifiedToken = { verifyToken };
export const JWT = new JWToken();
