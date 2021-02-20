import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const User = new mongoose.Schema(
  {
    type: { type: String, required: true },
    nickname: { type: String, required: true },
    default: {
      email: String,
      password: String,
    },
    twitter: {
      user: String,
      id: String,
    },
  },
  {
    timestamps: true,
  }
);

User.methods.compare = function (pass, cb) {
  bcrypt.compare(pass, this.password, (err, equal) => {
    if (err) {
      return cb(err);
    }

    cb(null, equal);
  });
};

export default mongoose.models.users || mongoose.model("users", User);
