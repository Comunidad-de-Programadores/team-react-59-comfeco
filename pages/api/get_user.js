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
    console.log(content);

    const user = await User.findById(content._id);
    switch (user.type) {
      case "default":
        res.status(200).json({ nickname: user.nickname, email: user.email });
        break;
      case "twitter":
        res.status(200).json({ nickname: user.nickname, email: user.email });
        break;
      case "github":
        res.status(200).json({ nickname: user.nickname, email: user.email });
        break;
      case "facebook":
        res.status(200).json({ nickname: user.nickname, email: user.email });
        break;
      case "google":
        res.status(200).json({ nickname: user.nickname, email: user.email });
        break;
      default:
        console.log(user);
        res.status(400).json({ error: "invalid" });
    }
  } else {
    res.status(200).json({ message: "Only get method" });
  }
}
