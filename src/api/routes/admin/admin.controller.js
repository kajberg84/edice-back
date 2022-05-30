//Admin controller
import Admin from "../../models/Admin.model.js";
import StatusCodes from "../../helpers/StatusCodes.js";
import { hashPassword } from "../../middleware/authentication.js";

// Getting admins
const getAll = async (req, res) => {
  const admins = await Admin.find({});
  res.status(StatusCodes.OK).json(admins);
  if (!admins) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting Admins");
  }
};

// Getting admin by id
const getAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.status(StatusCodes.OK).json(admin);
  if (!admin) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting Admins");
  }
};

// Adding an admin
const addAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const newAdmin = new Admin({
    name,
    email,
    password: hashPassword(password),
  });
  try {
    await newAdmin.save();
    res.status(StatusCodes.CREATED).json("Admin was created");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json("An error ocurred");
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  const { name, email, password } = await req.body;
  console.log(req.body);
  try {
    Admin.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password: hashPassword(password),
      },
      { new: true }
    );
    res.status(StatusCodes.CREATED).json("Admin was updated successfully");
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("An error ocurred");
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
  Admin.findByIdAndDelete(req.params.id, (err) => {
    if (err)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json("Admin could not be deleted due to server error");
    res.status(StatusCodes.CREATED).json("Admin was deleted successfully");
  });
};

export { getAll, getAdmin, addAdmin, updateAdmin, deleteAdmin };
