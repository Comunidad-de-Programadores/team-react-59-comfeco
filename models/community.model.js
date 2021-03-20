import mongoose from "mongoose";

const Community = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String },
    foto: { type: String},
    url: { type: String},
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.communities || mongoose.model("communities", Community);
