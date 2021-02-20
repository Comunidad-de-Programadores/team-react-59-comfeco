import { connectdb } from "../../../database/db";
import jwt from "jsonwebtoken";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  const { token } = req.body;
  await connectdb();
  if (req.method === "POST") {
    if (!token) {
      return res.status(200).json({ error: "Put the values" });
    }

    const code = await jwt.verify(token, process.env.Key);
    if (!code) {
      return res.status(401).json({ error: "Invalid token" });
    }

    switch (code.type) {
      case "twitter":
        const existTwitter = await User.findOne({ twitterId: code.userId });

        if (!existTwitter) {
          return res.status(200).json({ exist: false });
        }

        const bearerToken = await jwt.sign(
          { _id: existTwitter._id },
          process.env.KEY
        );

        res.status(200).json({ token: bearerToken });
        break;

      default:
        return res.status(400).json({ error: "Type not found" });
        break;
    }
  } else {
    req.status(200).json({ message: "Only Post Method" });
  }
}
