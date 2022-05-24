//Admin controller
import Admin from "../../models/Admin.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// Getting admins
const getAdmin = async (req, res) => {
  const admins = await Admin.find({});
  res.status(StatusCodes.OK).json(admins);
  if (!admins) {
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
    password,
  });
  try {
    await newAdmin.save();
    res.status(StatusCodes.CREATED).json("Admin was created");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  Admin.findByIdAndUpdate(req.params.id, {
    name,
    email,
    password,
  });
  res.status(StatusCodes.CREATED).json("Admin was updated successfully");
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

export { getAdmin, addAdmin, updateAdmin, deleteAdmin };
