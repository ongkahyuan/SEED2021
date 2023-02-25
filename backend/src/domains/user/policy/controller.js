
const {getUsers, getUserByID} = require('./model');

const getHome = async (req, res) => {
    res.status(200).send('Express JS Home')
};

const getAllUsers = async (req, res) => {
    try {
        let rows = await getUsers();
        res.status(200).send(rows)
    }
    catch(error){
        console.log(error);
        res.status(404).send('Error: ', error);
    }
};

module.exports = {
    getHome,
    getAllUsers
}