const express = require("express");
const router = express.Router();
const schedulingController = require("./../controllers/scheduling-controller");
const classroomController = require("./../controllers/classroom-controller");

router
  .route("/basic/schedule-appointment")
  .post(schedulingController.scheduleAppointment)
  .get(classroomController.getAllClassrooms);

router.route("/schedulings").get(schedulingController.getAllSchedulings);

module.exports = router;
