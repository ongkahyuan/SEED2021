const pool = require("../../config/db");

const createClaims = async (claimsInfo) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query();
  connection.release();
  return { rows, fields };
};

const getGeneralClaims = async (employeeId) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query(
    `SELECT ClaimID, ExpenseDate, Status
FROM (User JOIN insurancePolicies ON User.EmployeeID = insurancePolicies.EmployeeId)
	JOIN insuranceClaims on insurancePolicies.InsuranceID = insuranceClaims.InsuranceID
WHERE User.EmployeeID = "${employeeId}"`
  );
  connection.release();
  return { rows, fields };
};

const getSpecificClaims = async (claimId) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query(
    `SELECT * FROM insuranceClaims WHERE insuranceClaims.claimId = "${claimId}"`
  );
  connection.release();
  return { rows, fields };
};

const updateClaims = async (claimId, updateClaimInfo) => {
  const connection = await pool.getConnection();
  let updateString = "";
  Object.keys(updateClaimInfo).forEach((key) => {
    updateString += key + " = ";
    if (!isNaN(updateClaimInfo[key])) {
      updateString += `${updateClaimInfo[key]}, `;
    } else {
      updateString += `"${updateClaimInfo[key]}", `;
    }
  });
  updateString = updateString.slice(0, -2);
  const queryString = `UPDATE insuranceClaims SET ${updateString} WHERE insuranceClaims.claimId = "${claimId}"`;
  console.log(queryString);
  const [rows, fields] = await connection.query(queryString);
  connection.release();
  return { rows, fields };
};

const deleteClaims = async (claimId) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query(
    `DELETE FROM insuranceClaims WHERE insuranceClaims.claimId = "${claimId}"`
  );
  connection.release();
  return { rows, fields };
};

module.exports = {
  createClaims,
  getGeneralClaims,
  getSpecificClaims,
  updateClaims,
  deleteClaims,
};
