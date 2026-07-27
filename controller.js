const User = require("./model");

const getUsers = (req, res, next) =>{
    // Fetch all users
    user.find()
    . then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({message: "Error fetching users", error: err});
    });
}

const addUser = (req, res, next) =>{
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    // Save the user to the database
    user.save()
    .then(() => {
        res.status(201).json({message: "User added successfully"});
    })
    .catch(err => {
        res.status(500).json({message: "Error fetching users", error: err});
    });
}



exports.getUsers = getUsers;
exports.getUserById = getUserById;
