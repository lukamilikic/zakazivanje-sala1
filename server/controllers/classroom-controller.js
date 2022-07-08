const classroomRepository = require("./../repositories/classroom-repository");

const createClassroom = async (req, res) => {
  const number = await classroomRepository.createClassroom(req.body);
  res.send({ number });
};

const getClassroomByNumber = async (req, res) => {
  const classroom = await classroomRepository.getClassroomByNumber(
    req.params.number
  );
  res.send(classroom);
};

const getAllClassrooms = async (req, res) => {
  const classrooms = await classroomRepository.getAllClassrooms();
  res.send(classrooms);
};

const updateClassroom = async (req, res) => {
  try {
    const classroom = await classroomRepository.updateClassroom(
      req.body,
      req.params.number
    );
    res.send(classroom);
  } catch (err) {
    res.send({ error: err.message });
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const classroom = await classroomRepository.deleteClassroom(
      req.params.number
    );
    res.send(classroom);
  } catch (err) {
    res.send({ error: err.message });
  }
};

module.exports = {
  getAllClassrooms,
  createClassroom,
  getClassroomByNumber,
  updateClassroom,
  deleteClassroom,
};
