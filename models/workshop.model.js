import mongoose from "mongoose";

const Workshop = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String },
    date: { type: String},
    hour: { type: String},
    zone: { type: String},
    attendant: { type: String},
    group: { type: String}
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.workshops|| mongoose.model("workshops", Workshop);
