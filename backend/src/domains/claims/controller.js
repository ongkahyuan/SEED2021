
const {getUsers, getUserByID} = require('./model');

const createClaim = async (req, res) => {
    res.status(200).send('Express JS Home')
};

const editClaim = async (req, res) => {

};

const deleteClaim = async (req, res) => {

};

module.exports = {
    getHome,
    getAllUsers
}