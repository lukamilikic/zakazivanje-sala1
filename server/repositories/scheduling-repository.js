const dbConnection = require("./../db/db-connection");

const scheduleAppointment = async (appointment) => {
  const [results, metadata] = await dbConnection.query(
    `INSERT INTO scheduling (username, number, scheduledFrom, scheduledTo, created, updated) VALUES ( ?, ?, ?, ?, now(), now())`,
    {
      replacements: [
        appointment.username,
        appointment.number,
        appointment.scheduledFrom,
        appointment.scheduledTo,
      ],
    }
  );

  return results;
};

const getAllSchedulings = async () => {
  const [results, metadata] = await dbConnection.query(
    `SELECT  u.name, s.number, s.scheduledFrom, s.scheduledTo FROM scheduling AS s JOIN user u ON u.username = s.username`
  );
  return results;
};

module.exports = { scheduleAppointment, getAllSchedulings };
