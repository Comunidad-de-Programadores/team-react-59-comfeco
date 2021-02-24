import Community from "../../models/community.model";
import { connectdb } from "../../database/db";

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
    const { name, foto, url } = req.body;

    //Verify the values
    if (
      name == "" ||
      foto == "" ||
      url == "" ||
      !name ||
      !foto ||
      !url
    ) {
      return res.status(400).json({ error: "Faltan valores" });
    }

    //Register Community
    const register = await new Community({
      type: "default",
      name,
      foto,
      url,
    }).save();

  

    res.status(200).json({ message: "Comunidad Registrado" });
  } else {
    res.status(200).json({ message: "Only post method" });
  }
}
