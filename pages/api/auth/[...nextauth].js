import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";

const config = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUBSECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTERKEY,
      clientSecret: process.env.TWITTERSECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOKAPPID,
      clientSecret: process.env.FACEBOOKAPPSECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLEID,
      clientSecret: process.env.GOOGLESECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      console.log({ user, account, profile });
      const token = await jwt.sign(
        { ...user, type: account.provider },
        process.env.KEY
      );
      return "/register-social?token=" + token;
    },
  },
};

export default (req, res) => NextAuth(req, res, config);
