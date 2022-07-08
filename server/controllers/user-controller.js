const userRepository = require("./../repositories/user-repository");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const username = await userRepository.createUser(req.body);
  res.send({ username });
};

const getUserByUsernameAndPasswordAndRole = async (req, res) => {
  const { username, password, role } = req.params;
  const result = await userRepository.getUserByUsernameAndPasswordAndRole(
    username,
    password,
    role
  );
  response.send(result);
};

const getAllUsers = async (req, res) => {
  const results = await userRepository.getAllUsers();
  res.send(results);
};

const deleteUser = async (req, res) => {
  try {
    const result = await userRepository.deleteUser(req.body.personID);
    res.send(result);
  } catch (err) {
    res.send({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userRepository.updateUser(req.body);
    res.send(result);
  } catch (err) {
    res.send({ error: err.message });
  }
};

const login = async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  const role = request.body.role;
  const result = await userRepository.getUserByUsernameAndPasswordAndRole(
    username,
    password,
    role
  );
  let returnValue = { token: null, msg: null, status: 200 };
  if (typeof result[0] === "undefined") {
    returnValue.msg = "Incorrect username/password/role";
    returnValue.status = 404;
    response.send(returnValue);
    return;
  }
  let toSend = {
    personID: result[0].personID,
    username: result[0].username,
    password: result[0].password,
    name: result[0].name,
    role: result[0].role,
  };
  jwt.sign(
    toSend,
    "SECRET",
    (err, token) => {
      returnValue.token = token;
      response.send(returnValue);
    },
    { expiresIn: "1h" }
  );
};

module.exports = {
  login,
  createUser,
  getUserByUsernameAndPasswordAndRole,
  updateUser,
  deleteUser,
  getAllUsers,
};
