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

    const code = await jwt.verify(token, process.env.KEY);
    if (!code) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const emailExist = await User.findOne({ email: code.email });
    console.log(emailExist);

    switch (code.type) {
      case "twitter":
        if (emailExist && !emailExist.twitterId) {
          const update = await User.findByIdAndUpdate(emailExist._id, {
            twitterId: code.id,
            twitterName: code.name,
          });

          const token = await jwt.sign({ _id: update._id }, process.env.KEY);

          return res.status(200).json({ token });
        }

        const existTwitter = await User.findOne({ twitterId: code.id });

        if (!existTwitter) {
          return res.status(400).json({ exist: false });
        }

        const twitterToken = await jwt.sign(
          { _id: existTwitter._id },
          process.env.KEY
        );

        res.status(200).json({ token: twitterToken });
        break;

      case "github":
        if (emailExist && !emailExist.githubId) {
          const update = await User.findByIdAndUpdate(emailExist._id, {
            githubId: code.id,
            githubName: code.name,
          });

          const token = await jwt.sign({ _id: update._id }, process.env.KEY);

          return res.status(200).json({ token });
        }

        const existGithub = await User.findOne({ githubId: code.id });

        if (!existGithub) {
          return res.status(400).json({ exist: false });
        }

        const githubToken = await jwt.sign(
          { _id: existGithub._id },
          process.env.KEY
        );

        res.status(200).json({ token: githubToken });
        break;

      case "facebook":
        if (emailExist && !emailExist.facebookId) {
          const update = await User.findByIdAndUpdate(emailExist._id, {
            facebookId: code.id,
            facebookName: code.name,
          });

          const token = await jwt.sign({ _id: update._id }, process.env.KEY);

          return res.status(200).json({ token });
        }

        const existFacebook = await User.findOne({ facebookId: code.id });

        if (!existFacebook) {
          return res.status(400).json({ exist: false });
        }

        const facebookToken = await jwt.sign(
          { _id: existFacebook._id },
          process.env.KEY
        );

        res.status(200).json({ token: facebookToken });
        break;

      case "google":
        if (emailExist && !emailExist.googleId) {
          const update = await User.findByIdAndUpdate(emailExist._id, {
            googleId: code.id,
            googleName: code.name,
          });

          const token = await jwt.sign({ _id: update._id }, process.env.KEY);

          return res.status(200).json({ token });
        }

        const existGoogle = await User.findOne({ googleId: code.id });

        if (!existGoogle) {
          return res.status(400).json({ exist: false });
        }

        const googleToken = await jwt.sign(
          { _id: existGoogle._id },
          process.env.KEY
        );

        res.status(200).json({ token: googleToken });
        break;

      default:
        return res.status(400).json({ error: "Type not found" });
        break;
    }
  } else {
    req.status(200).json({ message: "Only Post Method" });
  }
}
