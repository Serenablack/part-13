const express = require("express");
const { PORT } = require("./utils/config");
const noteRouter = require("./controllers/notes");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const { connectToDatabase } = require("./utils/db");
const app = express();
app.use(express.json());
app.use("/api/notes", noteRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
start();
