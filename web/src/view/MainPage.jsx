import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from "prop-types";

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
}));

const holodata = [
  {
    name: "korone",
    imgsrc:
      "https://yt3.ggpht.com/ytc/AAUvwnimjdERaJDGopfH8UaB0r9tr_p8uyuEWWyYVkAd5Q=s176-c-k-c0x00ffffff-no-rj",
    generation: 0,
    channelid: "UChAnqc_AY5_I3Px5dig3X1Q",
  },
  {
    name: "okayu",
    imgsrc:
      "https://yt3.ggpht.com/ytc/AAUvwnjXQ3Gt3t3SdUMZHBhhEb_c1jqThHfDaVNJF_LJ=s176-c-k-c0x00ffffff-no-rj",
    generation: 1,
    channelid: "UCvaTdHTWBGv3MKj3KVqJVCw",
  },
  {
    name: "name",
    imgsrc:
      "https://yt3.ggpht.com/ytc/AAUvwnitKO1oRAtdofjPuRx8I8QOMyyPcJ5TA1biR8rpzw=s176-c-k-c0x00ffffff-no-rj",
    generation: 1,
    channelid: "UC9Z55NM455lDvD3yTGiBodw",
  },
  {
    name: "name",
    imgsrc:
      "https://yt3.ggpht.com/ytc/AAUvwnjXQ3Gt3t3SdUMZHBhhEb_c1jqThHfDaVNJF_LJ=s176-c-k-c0x00ffffff-no-rj",
    generation: 1,
    channelid: "123",
  },
];

const MainPage = () => {
  const classes = useStyles();
  const [generations, setGeneration] = useState([]);
  useEffect(() => {
    setGeneration([...new Set(holodata.map(data => data.generation))]);
  }, [holodata]);
  return (
    <div className={classes.root}>
      <Grid container component={Paper} className={classes.paper}>
        {generations.map(generation => (
          <MembersRow
            key={generation}
            generation={generation}
            members={holodata.filter(data => data.generation === generation)}
          />
        ))}
      </Grid>
    </div>
  );
};

const MembersRow = props => {
  const { generation, members } = props;
  return (
    <Grid item container>
      <Grid item>
        <Typography variant="h4">{generation}</Typography>
      </Grid>
      <Grid container item spacing={2}>
        {members.map(member => (
          <Member key={member.name} {...member} />
        ))}
      </Grid>
    </Grid>
  );
};

MembersRow.propTypes = {
  generation: PropTypes.number.isRequired,
  members: PropTypes.array.isRequired,
};

const Member = props => {
  const classes = useStyles();
  const { name, imgsrc, channelid } = props;
  return (
    <Grid item>
      <Grid container item direction="column" alignItems="center">
        <Grid item>{name}</Grid>
        <Grid item>
          <Link
            to={{
              pathname: "/MainPage/ChannelVideos/" + channelid,
            }}
          >
            <ButtonBase className={classes.image}>
              <img alt="complex" src={imgsrc} />
            </ButtonBase>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
Member.propTypes = {
  name: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
  channelid: PropTypes.string.isRequired,
};
export default MainPage;
