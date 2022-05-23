import bcrypt from "bcrypt";

export const getAuth = (req, res, next) => {
  console.log("Authenticated user");
  next();
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
