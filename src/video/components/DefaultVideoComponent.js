import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player' // light weight player can be change later on

class DefaultVideoCompoent extends Component {

  render() {
    const { url } = this.props;
    return (
      <ReactPlayer
        width="100%"
        url={url}
        playing
      />);
  }
}
DefaultVideoCompoent.propTypes = {
  srcType: PropTypes.string,
  srcID: PropTypes.string,
  url: PropTypes.string,
};
export default DefaultVideoCompoent;

