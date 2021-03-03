import Workshop from "../../models/groupworkshop.model";
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
    const { name, hour, date, attendant, group } = req.body;

    //Verify the values
    if (
      name == "" ||
      !name
    ) {
      return res.status(400).json({ error: "Faltan valores" });
    }

    //Register Workshop
    const register = await new Workshop({
      type: "default",
      name
    }).save();

  

    res.status(200).json({ message: "Grupo de Taller Registrado" });
  } else {
    res.status(200).json({ message: "Only post method" });
  }
}
