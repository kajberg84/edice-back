import { hashPassword } from "../../middleware/authentication.js";
import User from "../../models/User.model.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// Getting users
const getAll = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json(users);
  if (!users) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting user");
  }
};

// Getting user by id
const getUser = async (req, res) => {
  const users = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json(users);
  if (!users) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting orders");
  }
};

// Adding a user
const addUser = async (req, res) => {
  const { name, address, city, zipcode, phone, email, password } = req.body;
  const newUser = new User({
    name,
    address,
    city,
    zipcode,
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

// update a user
const updateUser = async (req, res) => {
  const { name, address, city, zipcode, phone, email, password } = req.body;
  User.findByIdAndUpdate(req.params.id, {
    name,
    address,
    city,
    zipcode,
    phone,
    email,
    password,
  });
  res.status(StatusCodes.CREATED).json("User was updated successfully");
};

// Delete a user
const deleteUser = async (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json("User could not be deleted due to server error");
    res.status(StatusCodes.CREATED).json("User was deleted successfully");
  });
};

export { getAll, getUser, addUser, updateUser, deleteUser };
