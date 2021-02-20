import { withSession } from "next-session";
import tw from "../../../functions/twitter";

export const config = {
  api: {
    externalResolver: true,
  },
};

const handler = async (req, res) => {
  tw.login((err, tokenSecret, url) => {
    if (err) {
      // Handle the error your way
    }

    // Save the OAuth token secret for use in your /twitter/callback route
    req.session.tokenSecret = tokenSecret;

    // Redirect to the /twitter/callback route, with the OAuth responses as query params
    res.redirect(url);
  });
};

export default withSession(handler);
