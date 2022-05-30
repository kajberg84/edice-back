import { checkPassword } from "../../middleware/authentication.js";
import User from "../../models/User.model.js";
import Admin from "../../models/Admin.model.js";
import StatusCodes from "../../helpers/StatusCodes.js";

const loginUser = async (req, res) => {
  console.log(req);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const checkUserPassword = await checkPassword(password, user.password);

  if (!user || !checkUserPassword) {
    res.status(StatusCodes.BAD_REQUEST).json("Wrong email or password.");
  }
  res.status(StatusCodes.OK).json({
    name: user.name,
    address: user.address,
    city: user.city,
    zipcode: user.zipcode,
    phone: user.phone,
    email: user.email,
  });
};

const loginAdmin = async (req, res) => {
  console.log(req);
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  const checkAdminPassword = await checkPassword(password, admin.password);

  if (!admin || !checkAdminPassword) {
    res.status(StatusCodes.BAD_REQUEST).json("Wrong email or password.");
  }
  res.status(StatusCodes.OK).json({
    name: admin.name,
    address: admin.address,
  });
};

export { loginUser, loginAdmin };
