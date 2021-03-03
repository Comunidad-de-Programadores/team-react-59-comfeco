import mongoose from "mongoose";

const GroupWorkshop = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String }
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.groupworkshop|| mongoose.model("groupworkshop", GroupWorkshop);
