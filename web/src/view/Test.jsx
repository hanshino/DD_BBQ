import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    minWidth: 300,
    width: "50%",
  },
  paper: {
    padding: theme.spacing(5),
    margin: "auto",
    maxWidth: "auto",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://yt3.ggpht.com/ytc/AAUvwngST9tdspZgipxxe6KUzq_t-CkbVhCjkmnWxb1uZw=s176-c-k-c0x00ffffff-no-rj",
    title: "Hololiver",
    width: "50%",
  },
  {
    url: "https://yt3.ggpht.com/ytc/AAUvwnitKO1oRAtdofjPuRx8I8QOMyyPcJ5TA1biR8rpzw=s176-c-k-c0x00ffffff-no-rj",
    title: "Channels",
    width: "50%",
  },

];

const Test = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item component={Paper}className={classes.paper} >
        {<CharacterButton />}
        {<ChannelButton />}
        {<Pictures
        key={date}
        date={date}
        video={channelrecentinfo.filter(data => data.date === date)}/>}
      </Grid>
    </div>
  );
};

const CharacterButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        <ButtonBase
          focusRipple
          key={images[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[0].width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[0].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[0].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
    </div>
  );
};

const ChannelButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        <ButtonBase
          focusRipple
          key={images[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[1].width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[1].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[1].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
    </div>
  );
};

// const RecommandVideo = props => {}

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
export default Test;
