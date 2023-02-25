const { getClaims } = require("./model");

const getUserClaims = async (req, res) => {
  try {
    const employeeId = "58001001"; // Get employeeId from req
    const { rows, fields } = await getClaims(employeeId);
    return res.json({
      message: "Successfully retrieve user claims",
      data: { rows, fields },
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

module.exports = {
  getUserClaims,
};

// const createClaim = async (req, res) => {
//     res.status(200).send('Express JS Home')
// };

// const editClaim = async (req, res) => {

// };

// const deleteClaim = async (req, res) => {

// };

// module.exports = {
//   getHome,
//   getAllUsers
// };
