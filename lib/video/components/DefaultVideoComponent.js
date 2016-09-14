'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
var VIMEO_PREFIX = 'https://player.vimeo.com/video/';

var getSrc = function getSrc(_ref) {
  var url = _ref.url;
  var srcID = _ref.srcID;
  var srcType = _ref.srcType;

  if (srcType === 'youtube') {
    return '' + YOUTUBE_PREFIX + srcID;
  }
  if (srcType === 'vimeo') {
    return '' + VIMEO_PREFIX + srcID;
  }
  return undefined;
};

var DefaultVideoCompoent = function DefaultVideoCompoent(props) {
  var blockProps = props.blockProps;

  var src = getSrc(blockProps);

  if (src) {
    return _react2.default.createElement('iframe', {
      style: { width: '100%' },
      src: src,
      frameBorder: '0',
      allowFullScreen: true
    });
  }

  return _react2.default.createElement(
    'div',
    null,
    'invalid video source'
  );
};

DefaultVideoCompoent.propTypes = {
  srcType: _react.PropTypes.string,
  srcID: _react.PropTypes.string,
  url: _react.PropTypes.string
};
exports.default = DefaultVideoCompoent;