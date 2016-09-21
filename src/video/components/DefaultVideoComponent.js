import React, { PropTypes } from 'react';
const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/'

const getSrc = ({ url, srcID, srcType }) => {
  if (srcType === 'youtube') {
    return `${YOUTUBE_PREFIX}${srcID}`;
  }
  if (srcType === 'vimeo') {
    return `${VIMEO_PREFIX}${srcID}`;
  }
  return undefined;
};

const DefaultVideoCompoent = props => {
  const { blockProps } = props;
  const src = getSrc(blockProps);
  const aspectRatio = 16/9;
  const paddingTop = `${100/aspectRatio}%`;

  if (src) {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'block', width: '100%', padding: `${paddingTop} 0 0 0`, margin: 0 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 0, margin: 0 }}>
          <iframe width='100%' height='100%' src={src} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    );
  }

  return (<div>invalid video source</div>);
};

DefaultVideoCompoent.propTypes = {
  srcType: PropTypes.string,
  srcID: PropTypes.string,
  url: PropTypes.string,
};
export default DefaultVideoCompoent;