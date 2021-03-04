const YoutubeModel = require("../models/YoutubeModel");

exports.getChannelRecentInfo = async function (channelId) {
  let data = await YoutubeModel.getChannelRecentInfo(channelId);
  return ytXmlDataProccess(data);
}

function ytXmlDataProccess(data){
  return data.feed.entry.map(function (data) {
    const { title, link, published } = data;
    let re = /#(?<tag>\S+)/g;
    let tag = re.exec(data['media:group'][0]['media:description'][0])
    return result = {
      title: title[0],
      link: link[0].$.href,
      date: published[0],
      imgurl: data['media:group'][0]['media:thumbnail'][0].$.url,
      tag: tag[0]
    };
  })
}