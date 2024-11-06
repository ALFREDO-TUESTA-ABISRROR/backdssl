const express = require("express");
require("dotenv").config();
const userController = require("./controllers/userController");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hola, el servidor está funcionando.");
});
app.use("/api/users", userController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
