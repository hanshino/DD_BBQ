const router = require("express").Router();
const bodyParser = require("body-parser");
const YoutubeController = require("../../controllers/YoutubeController");

router.use(bodyParser.json());

router.get("/hello", (req, res) => {
  res.json({ name: "hanshino" });
});

router.get("/channel/recent/info", YoutubeController.api.getChannelRecentInfo);

module.exports = router;
