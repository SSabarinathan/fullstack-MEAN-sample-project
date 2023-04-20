import jwt from "jsonwebtoken";

const SECRET_KEY = "secretKeys";

class JWToken {
  //generating token
  generateToken = (userId: any) => {
    console.log(
      "----------------We are Inside the Token------------------------"
    );
    return new Promise((resolve, reject) => {
      const payload = { name: "JWT token" };
      const options = { expiresIn: "1h", audience: userId };
      jwt.sign(payload, SECRET_KEY, options, async (err, token) => {
        if (err) reject(err);
        resolve(token);
        
      });
    });
  };

  //verify token
  verifyToken = (token: any) => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded;
    } catch (error) {
      return null;
    }
  };
}

export const JWT = new JWToken();
