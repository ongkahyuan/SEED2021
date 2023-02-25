const pool = require('../../config/db');

module.exports = {
    getPoliciesByEmployeeID: async function(id){
        try {
            const connection = await pool.getConnection();
            const [rows, fields] = await connection.query('SELECT * FROM InsuranceData.InsurancePolicies WHERE EmployeeID = ?',
            [id]);
            connection.release();
            return rows
          } catch (error) {
            throw(error)
          }
    },
}