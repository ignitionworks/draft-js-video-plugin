import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player' // light weight player can be change later on

const DefaultVideoCompoent = props => {
  const { blockProps } = props;
  const { url } =blockProps;
  return (
    <ReactPlayer
      width="100%"
      url={url}
      playing
    />);
};

DefaultVideoCompoent.propTypes = {
  srcType: PropTypes.string,
  srcID: PropTypes.string,
  url: PropTypes.string,
};
export default DefaultVideoCompoent;
