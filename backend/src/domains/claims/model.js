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

const updateClaims = async (updateInfo) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query();
  connection.release();
  return { rows, fields };
};

const deleteClaims = async (claimsId) => {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.query();
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
