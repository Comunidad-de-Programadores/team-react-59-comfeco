import { connectdb } from "../../database/db";
import extractToken from "../../functions/extractToken";
import encryptNewPassword from "../../functions/encryptNewPassword";
import User from "../../models/user.model";

export default async function handler(req, res) {
  await connectdb();

  if (req.method == "POST") {
    const token = await extractToken(req);
    if (token.error) {
      return res.status(400).json({ error: "invalid" });
    }

    const user = await User.findById(token._id);
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    let querys = {};

    for (let i in req.body) {
      if (i && req.body[i] != "" && i == "password") {
        querys[i] = await encryptNewPassword(req.body[i]);
      } else if (i && req.body[i] != "") {
        querys[i] = req.body[i];
      }
    }

    const update = await User.findByIdAndUpdate(token._id, querys, {
      new: true,
    });

    res.status(200).json({
      ...update._doc,
      password: null,
    });
  } else {
    res.status(200).json({ message: "Only Post method" });
  }
}
