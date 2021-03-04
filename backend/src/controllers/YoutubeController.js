const YoutubeRepo = require("../repositories/YoutubeRepository");
exports.api = {};

exports.api.getChannelRecentInfo = async (req, res) => {
  try {
    const { channelId } = req.query;

    if (!channelId) throw "channel id empty";

    res.json(await YoutubeRepo.getChannelRecentInfo(channelId));
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e });
  }
};
