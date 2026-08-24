// controllers: controllers take what routes send to it, then use services to handle complex stuff

const authService = require('../services/authService'); 


async function addUser(req, res) {
    const {email, password} = req.body;
    const {data, error} = authService.signUpUser(email, password);
    if (error) {
        return res.status(400).json({error: error.message});
    }
    res.status(201).json({data});
}

module.exports = {addUser};
