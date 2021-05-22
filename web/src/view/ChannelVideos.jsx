import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
/*
    1.點頭像
    2.顯示頻道影片
    3.
*/

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: "auto",
    maxWidth: "auto",
  },
  image: {
    width: "auto",
    height: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    maxWidth: "200px",
  },
}));

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

  console.log(channelrecentinfo);
  return (
    <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
      <Grid container item>
        {date.map(date => (
          <Pictures
            key={date}
            date={date}
            video={channelrecentinfo.filter(data => data.date === date)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

YtPic.propTypes = {
  channelId: PropTypes.string.isRequired,
};

const Pictures = props => {
  const classes = useStyles();
  const { date, video } = props;
  let { channelId } = useParams();
  //console.log(date);
  //console.log(video);
  return (
    <Grid item container>
      <Grid item>
        <Typography variant="h4">{date}</Typography>
      </Grid>
      <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
        {video.map((video, index) => {
          console.log(video.videoid);
          return (
            <Grid item container key={index} direction="column" justify="center" xs={3}>
              <Grid item>
                <Link
                  to={{
                    pathname: `/MainPage/ChannelVideos/${channelId}/${video.videoid}`,
                  }}
                >
                  <ButtonBase
                    className={classes.image}
                    style={{
                      width: "20%",
                    }}
                  >
                    <img alt="complex" src={video.imgurl} />
                  </ButtonBase>
                </Link>
              </Grid>
              <Grid item className={classes.title}>
                <Typography variant="h8">{video.title}</Typography>
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
