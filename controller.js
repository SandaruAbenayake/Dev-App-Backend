const pool = require("./model");

const getUsers = (req, res, next) => {
  pool
    .query("SELECT id, name FROM user")
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching users", error: err.message });
    });
};

const addUser = (req, res, next) => {
  const { id, name } = req.body;
  pool
    .query("INSERT INTO user (id, name) VALUES (?, ?)", [id, name])
    .then(() => {
      res.status(201).json({ message: "User added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding user", error: err.message });
    });
};

const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  pool
    .query("UPDATE user SET name = ? WHERE id = ?", [name, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating user", error: err.message });
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.body;
  pool
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting user", error: err.message });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
