const User = require("./model");

const getUsers = (req, res, next) =>{
    user.find()
    . then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({message: "Error fetching users", error: err});
    });
}




exports.getUsers = getUsers;
exports.getUserById = getUserById;
