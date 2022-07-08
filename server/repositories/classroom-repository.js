const dbConnection = require("./../db/db-connection");

const createClassroom = async (classroom) => {
  const [results, metadata] = await dbConnection.query(
    `INSERT INTO classroom (number, description, imageURL, created, updated) VALUES ( ?, ?, ?, now(), now())`,
    {
      replacements: [
        classroom.number,
        classroom.description,
        classroom.imageURL,
      ],
    }
  );

  return results;
};

const getClassroomByNumber = async (number) => {
  const [result, metadata] = await dbConnection.query(
    `SELECT * FROM classroom WHERE number = ?`,
    {
      replacements: [number],
    }
  );

  return result[0];
};

const getAllClassrooms = async () => {
  const [result, metadata] = await dbConnection.query(
    `SELECT * FROM classroom`
  );

  return result;
};

const updateClassroom = async (classroom, number) => {
  const [result, metadata] = await dbConnection.query(
    `UPDATE classroom
                                                        SET description = ?,
                                                        imageURL = ?,
                                                        updated = now()
                                                        WHERE number = ?`,
    {
      replacements: [classroom.description, classroom.imageURL, number],
    }
  );
  return result;
};

const deleteClassroom = async (number) => {
  const [result, metadata] = await dbConnection.query(
    `DELETE FROM classroom
                                                        WHERE number = ?`,
    {
      replacements: [number],
    }
  );

  return result;
};

module.exports = {
  createClassroom,
  getClassroomByNumber,
  getAllClassrooms,
  updateClassroom,
  deleteClassroom,
};
