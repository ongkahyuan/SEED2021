const moment = require("moment");

const {
  getLargestClaim,
  createClaims,
  getGeneralClaims,
  getSpecificClaims,
  updateClaims,
  deleteClaims,
} = require("./model");

const createUserClaims = async (req, res) => {
  try {
    const claimsInfo = req.body;
    console.log(claimsInfo)
    let result = await getLargestClaim();
    let maxClaimValue = result['rows'][0]['LargestClaimID']
    maxClaimValue+=1
    const { rows, fields } = await createClaims(claimsInfo,maxClaimValue);
    return res.status(200).json({
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
    const employeeId = req.user.EmployeeID;
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
    const { claimId, ...updateClaimInfo } = req.body;
    const newUpdateClaimInfo = {
      ...updateClaimInfo,
      LastEditedClaimDate: `${moment().format().toString()}`,
    };
    const { rows, fields } = await updateClaims(claimId, newUpdateClaimInfo);
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
    const { claimId } = req.body;
    const { rows, fields } = await deleteClaims(claimId);
    return res.json({
      message: "Successfully delete user claims",
      data: rows,
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
