const pool = require('../../config/db');

module.exports = {
  getUsers: async function () {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM User');
      connection.release();
      return rows
    } catch (error) {
      throw (error)
    }
  },
  getUserByID: async function (id) {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(
        'SELECT * FROM User WHERE EmployeeID = ?',
        [id]
      );
      connection.release();
      return rows
    } catch (error) {
      throw (error)
    }
  }
}