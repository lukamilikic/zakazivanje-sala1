const dbConnection = require("./../db/db-connection");

const createUser = async (user) => {
  const [results, metadata] = await dbConnection.query(
    `INSERT INTO user (username, name, password, created, updated) VALUES ( ?, ?, ?, now(), now())`,
    {
      replacements: [user.username, user.name, user.password],
    }
  );

  return results;
};

const getUserByUsernameAndPassword = async (username, password) => {
  const [results, metadata] = await dbConnection.query(
    `SELECT * FROM user WHERE username = ? AND password = ?`,
    {
      replacements: [username, password],
    }
  );
  return results;
};

const updateUser = async (user) => {
  const [result, metadata] = await dbConnection.query(
    `UPDATE user 
                                                  SET username = ?,
                                                  name = ?,
                                                  password = ?,
                                                  updated = now()
                                                  WHERE PersonID = ?
  `,

    {
      replacements: [user.username, user.name, user.password, user.PersonID],
    }
  );

  return result;
};

const deleteUser = async (PersonID) => {
  const [result, metadata] = await dbConnection.query(
    `DELETE FROM user WHERE PersonID = ?`,
    { replacements: [PersonID] }
  );
  return result;
};

const getAllUsers = async () => {
  const [results, metadata] = await dbConnection.query(
    `SELECT PersonID, name, username, password FROM user WHERE role = ?`,
    { replacements: ["basic"] }
  );
  return results;
};

module.exports = {
  createUser,
  getUserByUsernameAndPassword,
  updateUser,
  deleteUser,
  getAllUsers,
};
