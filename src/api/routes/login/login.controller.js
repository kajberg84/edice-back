import { checkPassword } from "../../middleware/authentication.js";
import User from "../../models/User.js";
import StatusCodes from "../../helpers/StatusCodes.js";

const loginUser = async (req, res) => {
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

export { loginUser };
