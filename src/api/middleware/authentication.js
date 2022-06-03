import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "http-errors";

export const authenticateAdmin = async (req, res, next) => {
  console.log("Check for admin");
  console.log(req.admin);
  if (!req.admin) {
    next(createError(409));
  }
  next();
};

export const authenticateJWT = async (req, res, next) => {
  const authorization = req.headers.authorization?.split(" ");
  if (authorization?.[0] !== "Bearer") {
    console.log("No Bearer token available");
    next(createError(401));
    return;
  }
  try {
    // Get secret
    const secret = process.env.JWT_SECRET;
    const signOptions = {
      expiresIn: 60 * 60 * 24,
    };

    // Verify the JWT
    console.log(signOptions, "Hej");
    const payload = jwt.verify(authorization[1], secret);
    console.log(payload);
    req.admin = payload.admin;
    next();
  } catch (error) {
    console.log("ERROR i auth JWT");
    next(createError(403));
  }
};

export function hashPassword(userPassword) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(userPassword, salt);
  return hash;
}

export function checkPassword(userPassword, hashedPassword) {
  return bcrypt.compareSync(userPassword, hashedPassword);
}
