import jwt from "jsonwebtoken";
import { connectdb } from "../../../database/db";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  const { nickname, token } = req.body;
  await connectdb();
  if (req.method === "POST") {
    try {
      if (!nickname || !token) {
        return res.status(400).json({ error: "Put the values" });
      }

      const code = await jwt.verify(token, process.env.Key);
      if (!code) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const existNickname = await User.findOne({ nickname });
      if (existNickname) {
        return res.status(400).json({ error: "Nickname exist" });
      }

      switch (code.type) {
        case "twitter":
          const existTwitter = await User.findOne({ twitterId: code.userId });

          if (existTwitter) {
            return res.status(400).json({ error: "Twitter Exist" });
          }

          const newUser = await new User({
            type: "twitter",
            twitterId: code.userId,
            twitterName: code.userName,
            nickname,
          }).save();

          const bearerToken = await jwt.sign(
            { _id: newUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: bearerToken });
          break;

        default:
          return res.status(400).json({ error: "Type not found" });
          break;
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(200).json({ message: "Only Post method" });
  }
}
