const User = require("./model");

const getUsers = (cb) =>{
    cb(users);
}

const getUserById = (id,cb) =>
{
    const user = users.find (user => user.id === id )
    cb(user);
} 


exports.getUsers = getUsers;
exports.getUserById = getUserById;
