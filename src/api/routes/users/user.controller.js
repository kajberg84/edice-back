// imports
import { hashPassword } from '../../middleware/authentication.js';
import User from '../../models/User.model.js';
import StatusCodes from '../../helpers/StatusCodes.js';

// helpers
import { ErrorMessageHelper } from '../../helpers/ErrorMessageHelper.js';

// Getting users
const getAll = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(StatusCodes.OK).json(users);
    if (!users) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('An error occured while getting user');
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Getting user by id
const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(StatusCodes.OK).json(users);
    if (!users) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('An error occured while getting orders');
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Adding a user
const addUser = async (req, res, next) => {
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
    res.status(StatusCodes.CREATED).json('User was created');
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(ErrorMessageHelper(error));
    next();
  }
};

// update a user
// avaktiverade möjligheten att uppdatera lösenordet då det inte är nödvändigt för oss.
const updateUser = async (req, res, next) => {
  const { name, address, city, zipcode, phone, email, password } =
    await req.body;
  console.log(req.body);
  try {
    const response = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        address,
        city,
        zipcode,
        phone,
        email,
        // password: hashPassword(password),
      },
      { new: true }
    );
    res.status(StatusCodes.CREATED).json('User was updated successfully');
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id, (err) => {
      if (err)
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json('User could not be deleted due to server error');
      res.status(StatusCodes.CREATED).json('User was deleted successfully');
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

export { getAll, getUser, addUser, updateUser, deleteUser };
