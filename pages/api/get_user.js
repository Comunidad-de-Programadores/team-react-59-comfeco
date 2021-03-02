import User from "../../models/user.model";
import { connectdb } from "../../database/db";
import extractToken from "../../functions/extractToken";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

export default async function handler(req, res) {
  await connectdb();

  if (req.method === "GET") {
    //Extract token
    const content = await extractToken(req);
    if (content.error) {
      return res.status(400).json({ error: "invalid" });
    }

    const user = await User.findById(content._id);
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    res.status(200).json({
      ...user._doc,
      password: null,
    });
  } else {
    res.status(200).json({ message: "Only get method" });
  }
}
