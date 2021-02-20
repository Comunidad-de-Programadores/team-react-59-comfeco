import Twitter from "login-with-twitter";

const tw = new Twitter({
  consumerKey: process.env.TWITTERKEY,
  consumerSecret: process.env.TWITTERSECRET,
  callbackUrl: process.env.CALLBACK,
});

export default tw;
