import jwt from "jsonwebtoken";

const extractToken = async (req) => {
  try {
    if (!req.headers.authorization) {
      return { error: "Not authorized" };
    }

    const content = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.KEY
    );
    return content;
  } catch (error) {
    return { error };
  }
};

export default extractToken;
