import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = "secretKey";

class signAccessTokens {
  signAccessTokens = (userId: any) => {
    console.log(
      "----------------We are Inside the Token------------------------"
    );

    return new Promise((resolve, reject) => {
      const payload = { name: "JWT token" };
      const options = { expiresIn: "1h", audience: userId };

      jwt.sign(payload, ACCESS_TOKEN_SECRET, options, async (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  };
}

export const signAccessToken = new signAccessTokens();
