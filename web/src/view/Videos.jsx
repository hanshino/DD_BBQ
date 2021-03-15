import React from "react";
import { useParams } from "react-router";

const Videos = () => {
  let { videoId } = useParams();
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}?fs=1&rel=0&autoplay=1`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Videos;
