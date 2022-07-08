const express = require("express");
const router = express.Router();
const classroomController = require("./../controllers/classroom-controller");

router
  .route("/adminpanel/create-classroom")
  .post(classroomController.createClassroom);

router
  .route("/classroom/:number")
  .get(classroomController.getClassroomByNumber)
  .put(classroomController.updateClassroom)
  .delete(classroomController.deleteClassroom);

router.route("/classroom").get(classroomController.getAllClassrooms);

module.exports = router;
