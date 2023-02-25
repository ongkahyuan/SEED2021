
const { getPoliciesByEmployeeID, getPoliciesByPolicyID } = require('./model');
const { checkPolicyAuthorisation } = require("../../config/authenticate")

const getAllPolicyByEmployeeID = async (req, res) => {
    const user = req.user; //{EmployeeID: }
    let id = user.EmployeeID
    try {
        let rows = await getPoliciesByEmployeeID(id);
        res.status(200).send(rows)
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Error: ', error);
    }
};

const getAllPolicyByPolicyID = async (req, res) => {
    const user = req.user; //{EmployeeID: }
    const auth = await checkPolicyAuthorisation(req.get('PolicyID'), user)
    if (auth) {
        let id = req.get('PolicyID');
        try {
            let rows = await getPoliciesByPolicyID(id);
            res.status(200).send(rows)
        }
        catch (error) {
            console.log(error);
            res.status(404).send('Error: ', error);
        }
    } else {
        res.status(403).send('Unauthorised')
    }
};


module.exports = {
    getAllPolicyByEmployeeID,
    getAllPolicyByPolicyID
}