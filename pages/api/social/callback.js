import { withSession } from "next-session";
import tw from "../../../functions/twitter";
import jwt from "jsonwebtoken";
import User from "../../../models/user.model";

export const config = {
  api: {
    externalResolver: true,
  },
};

const handler = async (req, res) => {
  tw.callback(
    {
      oauth_token: req.query.oauth_token,
      oauth_verifier: req.query.oauth_verifier,
    },
    req.session.tokenSecret,
    async (err, user) => {
      if (err) {
        console.log(err);
      }

      delete req.session.tokenSecret;

      const token = await jwt.sign(
        { ...user, type: "twitter" },
        process.env.KEY
      );

      res.status(200).redirect(`/register-social?token=${token}`);
    }
  );
};

export default withSession(handler);
