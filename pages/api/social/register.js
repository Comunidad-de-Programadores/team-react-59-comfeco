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
          const existTwitter = await User.findOne({ twitterId: code.id });

          if (existTwitter) {
            return res.status(400).json({ error: "Twitter Exist" });
          }

          const newTwitterUser = await new User({
            type: code.type,
            twitterId: code.id,
            twitterName: code.name,
            nickname,
          }).save();

          const twitterToken = await jwt.sign(
            { _id: newTwitterUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: twitterToken });
          break;

        case "github":
          const existGithub = await User.findOne({ githubId: code.id });

          if (existGithub) {
            return res.status(400).json({ error: "Github Exist" });
          }

          const newGithubUser = await new User({
            type: code.type,
            githubId: code.id,
            githubName: code.name,
            nickname,
          }).save();

          const githubToken = await jwt.sign(
            { _id: newGithubUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: githubToken });
          break;

        case "facebook":
          const existFacebook = await User.findOne({ facebookId: code.id });

          if (existFacebook) {
            return res.status(200).json({ error: "Facebook Exist" });
          }

          const newFacebookUser = await new User({
            type: code.type,
            facebookId: code.id,
            facebookName: code.name,
            nickname,
          }).save();

          const facebookToken = await jwt.sign(
            { _id: newFacebookUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: facebookToken });
          break;

        case "google":
          const existGoogle = await User.findOne({ googleId: code.id });

          if (existGoogle) {
            return res.status(200).json({ error: "Google Exist" });
          }

          const newGoogleUser = await new User({
            type: code.type,
            googleId: code.id,
            googleName: code.name,
            nickname,
          }).save();

          const googleToken = await jwt.sign(
            { _id: newGoogleUser._id },
            process.env.KEY
          );

          res.status(200).json({ token: googleToken });
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
