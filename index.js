require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
//const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const workerRoutes = require("./routes/worker");
const ticketsRoutes = require("./routes/tickets");
const jobRoutes = require("./routes/jobs")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
//app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/worker", workerRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/jobs", jobRoutes);

const port = process.env.PORT || 1337;
app.listen(port, console.log(`Listening on port ${port}...`));