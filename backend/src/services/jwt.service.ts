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
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });
  };

  //verify token
  // verifyToken = (req: any) => {
  //   try {
  //     const token = req.headers("Authorization");
  //     console.log("the check token is ", token);

  //     const decoded = jwt.verify(token, SECRET_KEY);
  //     return decoded;
  //   } catch (error) {
  //     return null;
  //   }
  // };
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

// const verifyToken= (req, res, next)=>{

// if (!req.headers["authorization"]) {
//     console.log("No header found");
//   }
//   const authHeader = req.headers["authorization"];
//   const bearerToken = authHeader.split("");
//   const token = bearerToken[1];
//   jwt.verify(token, SECRET_KEY, (err: any, payload: any) => {
//     if (err) {
//       console.log("x1");
//     }
//     req.payload = payload;
//     next();
//   });
// }

//verifyToken inside
//  try {
//       const token = req.headers("Authorization");
//       console.log("the check token is ", token);

//       const decoded = jwt.verify(token, SECRET_KEY);
//       return decoded;
//     } catch (error) {
//       return null;
//     }
