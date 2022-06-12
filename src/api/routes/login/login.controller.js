import { checkPassword } from '../../middleware/authentication.js';
import User from '../../models/User.model.js';
import Admin from '../../models/Admin.model.js';
import StatusCodes from '../../helpers/StatusCodes.js';
import jwt from 'jsonwebtoken';

const loginUser = async (req, res, next) => {
  try {
    console.log(req);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const checkUserPassword = await checkPassword(password, user.password);

    if (!user || !checkUserPassword) {
      res.status(StatusCodes.BAD_REQUEST).json('Wrong email or password.');
    }

    const payload = {
      userId: user._id,
      name: user.name,
      address: user.address,
      city: user.city,
      zipcode: user.zipcode,
      phone: user.phone,
      email: user.email,
    };

    const secret = process.env.JWT_SECRET;
    const signOptions = {
      expiresIn: 60 * 60 * 24,
    };

    const accessToken = jwt.sign(payload, secret, signOptions);

    res.status(StatusCodes.OK).json({
      access_token: accessToken,
    });
  } catch {
    console.log('error i login');
    next();
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    console.log(req);
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    const checkAdminPassword = await checkPassword(password, admin.password);

    if (!admin || !checkAdminPassword) {
      res.status(StatusCodes.BAD_REQUEST).json('Wrong email or password.');
    }
    const payload = {
      adminId: admin._id,
      name: admin.name,
      email: admin.email,
      admin: true,
    };

    const secret = process.env.JWT_SECRET;
    const signOptions = {
      expiresIn: 60 * 60 * 24,
    };

    const accessToken = jwt.sign(payload, secret, signOptions);

    res.status(StatusCodes.OK).json({
      access_token: accessToken,
      user: payload,
    });
  } catch {
    console.log('error i login');
    next();
  }
};

export { loginUser, loginAdmin };
