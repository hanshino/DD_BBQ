const axios = require("axios").default;
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

/**
 * 獲取頻道最近影片資訊
 * @param {String} channelId 頻道ID
 * @returns {Promise<Array|Boolean>} return false on failure
 */
exports.getChannelRecentInfo = channelId => {
  return axios
    .get(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)
    .then(res => res.data)
    .then(data => parser.parseStringPromise(data))
    .catch(() => false);
};
