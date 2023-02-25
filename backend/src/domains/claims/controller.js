const {
  createClaims,
  getGeneralClaims,
  getSpecificClaims,
  updateClaims,
  deleteClaims,
} = require("./model");

const createUserClaims = async (req, res) => {
  try {
    const claimsInfo = req.body;
    const { rows, fields } = await createClaims(claimsInfo);
    return res.json({
      message: "Successfully created user claims",
      data: {
        rows,
        fields,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

const getUserGeneralClaims = async (req, res) => {
  try {
    const employeeId = "58001001"; // Get employeeId from req
    const { rows, fields } = await getGeneralClaims(employeeId);
    return res.json({
      message: "Successfully retrieve user claims",
      data: rows,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

const getUserSpecificClaims = async (req, res) => {
  try {
    const claimId = req.params["claimId"];
    const { rows, fields } = await getSpecificClaims(claimId);
    return res.json({
      message: "Successfully retrieve user claims",
      data: rows,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

const updateUserClaim = async (req, res) => {
  try {
    const updateClaimInfo = req.body;
    const { rows, fields } = await updateClaims(updateClaimInfo);
    return res.json({
      message: "Successfully updated user claims",
      data: rows,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

const deleteUserClaims = async (req, res) => {
  try {
    const { claimsId } = req.body;
    const { rows, fields } = await deleteClaims(claimsId);
    return res.json({
      message: "Successfully delete user claims",
      data: { rows, fields },
    });
  } catch (e) {
    res.status(404).json({
      message: e,
      data: {},
    });
  }
};

module.exports = {
  createUserClaims,
  getUserGeneralClaims,
  getUserSpecificClaims,
  updateUserClaim,
  deleteUserClaims,
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
