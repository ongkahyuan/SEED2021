const pool = require("../../config/db");

module.exports = {
  getClaims: async function (employeeId) {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(
      `SELECT * 
FROM (User JOIN insurancePolicies ON User.EmployeeID = insurancePolicies.EmployeeId)
	JOIN insuranceClaims on insurancePolicies.InsuranceID = insuranceClaims.InsuranceID
WHERE User.EmployeeID = "${employeeId}"`
    );
    connection.release();
    return { rows, fields };
  },
};
