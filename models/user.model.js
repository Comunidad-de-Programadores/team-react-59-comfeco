import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const User = new mongoose.Schema(
  {
    image: { type: String },
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String },
    biography: { type: String },
    gender: { type: String },
    birthdate: { type: String },
    area: { type: String },
    facebookLink: { type: String },
    twitterLink: { type: String },
    githubLink: { type: String },
    linkedinLink: { type: String },

    //default
    password: { type: String },

    //twitter
    twitterId: { type: String },
    twitterName: { type: String },

    //github
    githubId: { type: String },
    githubName: { type: String },

    //facebook
    facebookId: { type: String },
    facebookName: { type: String },

    //google
    googleId: { type: String },
    googleName: { type: String },

    //linkedin
    linkedinId: { type: String },
    linkedinName: { type: String },
  },
  {
    timestamps: true,
  }
);

User.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, result) => {
    if (err) {
      next(err);
    }

    bcrypt.hash(this.password, result, null, (err, hash) => {
      if (err) {
        next(err);
      }

      this.password = hash;
      next();
    });
  });
});

User.methods.compare = function (pass, cb) {
  bcrypt.compare(pass, this.password, (err, equal) => {
    if (err) {
      return cb(err);
    }

    cb(null, equal);
  });
};

export default mongoose.models.users || mongoose.model("users", User);
