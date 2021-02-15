import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const User = new mongoose.Schema({
    email: {type: String, required: true},
    nickname: {type: String, required: true},
    password: {type: String, required: true}
},{
    timestamps: true
});

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

export default mongoose.models.users || mongoose.model("users", User)