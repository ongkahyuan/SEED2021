
const {getPoliciesByEmployeeID} = require('./model');

const getAllPolicyByEmployeeID = async (req, res) => {
    let id = req.get('EmployeeID');
    try {
        let rows = await getPoliciesByEmployeeID(id);
        res.status(200).send(rows)
    }
    catch(error){
        console.log(error);
        res.status(404).send('Error: ', error);
    }
};



module.exports = {
    getAllPolicyByEmployeeID,
    
}