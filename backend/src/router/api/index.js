const router = require("express").Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/hello", (req, res) => {
  res.json({ name: "Sam Martin" });
});

module.exports = router;
