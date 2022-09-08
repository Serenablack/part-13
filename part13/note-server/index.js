const express = require("express");
const { PORT } = require("./utils/config");
const noteRouter = require("./controllers/notes");
const { connectToDatabase } = require("./utils/db");
const app = express();
app.use(express.json());
app.use("/api/notes", noteRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
start();
