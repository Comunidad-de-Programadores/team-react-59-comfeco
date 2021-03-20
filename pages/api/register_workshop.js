import Workshop from "../../models/workshop.model";
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
    const { name, date, hour, zone, attendant, group } = req.body;

    //Verify the values
    if (
      name == "" ||
      date == "" ||
      hour == "" ||
      zone == "" ||
      attendant == "" ||
      group == "" ||
      !name ||
      !date ||
      !hour ||
      !zone ||
      !attendant ||
      !group
    ) {
      return res.status(400).json({ error: "Faltan valores" });
    }

    //Register Workshop
    const register = await new Workshop({
      type: "default",
      name,
      date,
      hour,
      zone,
      attendant,
      group
    }).save();

  

    res.status(200).json({ message: "Taller Registrado" });
  } else {
    res.status(200).json({ message: "Only post method" });
  }
}
