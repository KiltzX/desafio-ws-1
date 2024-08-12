const app = require("express");

app.get("/", (req, res) => {
  res.send("Err, try /api/hello");
});

app.get("/api/hello", (req, res) => {
  const { name } = req.query;
  if (!name) return res.send("Please provide a name");
  res.send(`Hello ${name}!`);
});

app.get("/api/hello", (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name}!`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
