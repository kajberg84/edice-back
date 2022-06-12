import StatusCodes from '../../helpers/StatusCodes.js';

const logout = async (req, res, next) => {
  try {
    console.log('FRONTEND kan skicka med JWT token hit så vi får det flödet');

    // Destroy session
    console.log('Session destroyed');
    console.log('User loged out');
    res.status(StatusCodes.OK).json('Logout successful');
  } catch (error) {
    console.log(error);
    next();
  }
};

export { logout };
