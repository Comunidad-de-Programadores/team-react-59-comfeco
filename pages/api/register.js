import User from "../../models/user.model";
import { connectdb } from "../../database/db";
import jwt from "jsonwebtoken";
import encryptNewPassword from "../../functions/encryptNewPassword";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
  },
};

export default async function handler(req, res) {
  await connectdb();

  if (req.method === "POST") {
    const { email, password, nickname } = req.body;

    //Verify the values
    if (
      email == "" ||
      password == "" ||
      nickname == "" ||
      !email ||
      !password ||
      !nickname
    ) {
      return res.status(400).json({ error: "Faltan valores" });
    }

    //Verify if Email Exist
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ error: "Email existe" });
    }

    //Verify if nickname Exist
    const nicknameExist = await User.findOne({ nickname });
    if (nicknameExist) {
      return res.status(400).json({ error: "Nickname existe" });
    }

    const hash = await encryptNewPassword(password);

    //Register Users
    const register = await new User({
      type: "Default",
      nickname,
      default: {
        email,
        password: hash,
      },
    }).save();

    //Create Token
    const token = await jwt.sign({ _id: register._id }, process.env.KEY);

    res.status(200).json({ token });
  } else {
    res.status(200).json({ message: "Only post method" });
  }
}
