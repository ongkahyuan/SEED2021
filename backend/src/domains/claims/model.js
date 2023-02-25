const pool = require("../../config/db");

const createClaims = async (claimsInfo,maxClaimValue) => {
  try{
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(` INSERT INTO InsuranceData.InsuranceClaims (ClaimID, InsuranceID, FirstName, LastName, ExpenseDate, Amount, Purpose, FollowUp, 
    PreviousClaimID, Status, LastEditedClaimDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,[maxClaimValue,claimsInfo['insuranceID'],
    claimsInfo['firstName'],claimsInfo['lastName'],claimsInfo['expenseDate'],claimsInfo['claimAmt'],claimsInfo['purpose'],claimsInfo['followUp'],claimsInfo['previousClaim'],
    claimsInfo['status'],claimsInfo['lastEditedClaimDate']]);
    connection.release();
    return { rows, fields };
  }
  catch(error){
    throw error;
  }

};

const getLargestClaim = async () => {
  try{
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(` SELECT MAX(ClaimID) AS LargestClaimID FROM InsuranceClaims;`);
    connection.release();
    return { rows, fields };
  }
  catch(error){
    throw error;
  }

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
  getLargestClaim
};
