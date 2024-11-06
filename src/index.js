const express = require("express");
const app = express();
const port = 3000;
app.get("/", (re, res) => {
  res.send("hola");
});

app.listen(port, () => {
  console.log(`servidor en curso: http://localhost:${port}`);
});
