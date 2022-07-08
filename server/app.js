const express = require("express");
const jwt = require("jsonwebtoken");
const dbConnection = require("./db/db-connection");
const cors = require("cors");

// routing imports
const userRouting = require("./routing/user-routing");
const classroomRouting = require("./routing/classroom-routing");
const schedulingRouting = require("./routing/scheduling-routing");

const app = express();

// middleware
app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*"); // sa kojeg origina dozvoljavamo zahtijev
  0;
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // kojeg tipa je sadrzaj, koji je origin,...
  //"Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); //  koje tipove zahtijeva dozvoljavamou
  // res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.static("public"));

app.use("/", [userRouting, classroomRouting, schedulingRouting]);

app.listen(3000, () => {
  console.log("Server is listening at port 3000.");
});

dbConnection
  .authenticate()
  .then((connection) => {
    console.log("Connection has been established successfully!");
  })
  .catch((err) => {
    console.log("Error while connecting.");
  });
