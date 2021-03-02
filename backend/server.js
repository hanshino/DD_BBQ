const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 5000;
const apiRouter = require("./src/router/api");

app.use("/api", apiRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://locahost:${port}`);
});
