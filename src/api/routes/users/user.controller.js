import { hashPassword } from "../../middleware/authentication.js";
import User from "../../models/User.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// User controller
const getUser = (req, res) => {
  //Get user code
  console.log("get user");
};

const addUser = async (req, res) => {
  console.log("We are in the user creation", req.body);
  const { name, address, city, phone, email, password } = req.body;
  const newUser = new User({
    name,
    address,
    city,
    phone,
    email,
    password: hashPassword(password),
  });
  try {
    await newUser.save();
    res.status(StatusCodes.CREATED).json("User was created");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export { getUser, addUser };
