import StatusCodes from "../../helpers/StatusCodes.js"

const logout = async (req, res) => {
  console.log("FRONTEND kan skicka med JWT token hit så vi får det flödet")

  // Destroy session
  console.log("Session destroyed")
  console.log("User loged out")
  res.status(StatusCodes.OK).json("Logout successful")
}

export { logout }
