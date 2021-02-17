import { connectdb } from "../../database/db";
import jwt from "jsonwebtoken";
import User from "../../models/user.model";
import encryptNewPassword from "../../functions/encryptNewPassword";

export default async function handler(req, res) {
  await connectdb();

  if (req.method === "POST") {
    const { token, password } = req.body;

    //Check if email body exist
    if (!token || token == "" || password == "" || !password) {
      return res.status(200).json({ error: "Email or password are invalid" });
    }

    //Token
    let tokenContent;

    try {
      //Verify token
      tokenContent = await jwt.verify(token, process.env.KEY);
    } catch (error) {
      return res.status(400).json({ error: "Invalid token" });
    }

    //Verify action type
    if (tokenContent.action_type != "reset password") {
      return res.status(400).json({ error: "Invalid action_type" });
    }

    //Check if email exist
    const userExist = await User.findById(tokenContent._id);
    if (!userExist) {
      return res.status(400).json({ error: "Email Doesn't Exist" });
    }

    //hash the password
    const hashPassword = await encryptNewPassword(password);

    //Update password
    const updatePassword = await User.findByIdAndUpdate(tokenContent._id, {
      password: hashPassword,
    });

    res.status(200).json({ message: "Done!" });
  } else {
    res.status(500).json({ message: "Only post method" });
  }
}
