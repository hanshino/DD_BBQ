import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
/*
    1.點頭像
    2.顯示頻道影片
    3.
*/
const ChannelVideos = () => {
  let { channelId } = useParams();
  return <YtPic channelId={channelId} />;
};

const YtPic = props => {
  const { channelId } = props;
  const [date, setDate] = useState([]);
  const [channelrecentinfo, setchannelrecentinfo] = useState([]);
  const getChanneRecentlInfo = async () => {
    return axios.get(`/channel/recent/info?channelId=${channelId}`).then(function (response) {
      setchannelrecentinfo(response.data);
    });
  };
  useEffect(() => {
    getChanneRecentlInfo();
  }, []);

  useEffect(() => {
    setDate([...new Set(channelrecentinfo.map(data => data.date))]);
  }, [channelrecentinfo]);

  return (
    <Grid container>
      {date.map(date => (
        <Pictures
          key={date}
          date={date}
          video={channelrecentinfo.filter(data => data.date === date)}
        />
      ))}
    </Grid>
  );
};
YtPic.propTypes = {
  channelId: PropTypes.string.isRequired,
};

const Pictures = props => {
  const { date, video } = props;
  let { channelId } = useParams();
  console.log(date);
  console.log(video);
  return (
    <Grid item container direction="column" alignItems="center">
      <Grid item>{date}</Grid>
      <Grid item>
        {video.map((video, index) => {
          console.log(video.videoid);
          return (
            <Grid item container key={index} direction="column">
              <Grid item>{video.title}</Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: `/MainPage/ChannelVideos/${channelId}/${video.videoid}`,
                  }}
                >
                  <ButtonBase>
                    <img alt="complex" src={video.imgurl} />
                  </ButtonBase>
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
Pictures.propTypes = {
  date: PropTypes.string.isRequired,
  video: PropTypes.array.isRequired,
};


export default ChannelVideos;
