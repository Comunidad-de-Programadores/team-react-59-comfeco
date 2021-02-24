import Workshop from "../../models/workshop.model";
import { connectdb } from "../../database/db";

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
    
    Workshop.find({} , (error, data) => {
      if (error) {
        return res.status(400).json({ error: "invalid" });
      }
      else {
        res.status(200).json(data);
      }
    })
  }
}
