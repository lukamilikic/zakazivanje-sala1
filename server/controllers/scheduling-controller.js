const schedulingRepository = require("./../repositories/scheduling-repository");

const scheduleAppointment = async (req, res) => {
  const username = await schedulingRepository.scheduleAppointment(req.body);

  res.send({ username });
};

const getAllSchedulings = async (req, res) => {
  const results = await schedulingRepository.getAllSchedulings();
  res.send(results);
};

module.exports = { scheduleAppointment, getAllSchedulings };
