const YoutubeModel = require("../models/YoutubeModel");
exports.api = {};

exports.api.getChannelRecentInfo = async (req, res) => {
  try {
    const { channelId } = req.query;

    if (!channelId) throw "channel id empty";

    let result = await YoutubeModel.getChannelRecentInfo(channelId);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e });
  }
};
