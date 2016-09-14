'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// light weight player can be change later on

var DefaultVideoCompoent = function DefaultVideoCompoent(props) {
  var blockProps = undefined.props.blockProps;
  var url = blockProps.url;

  return _react2.default.createElement(_reactPlayer2.default, {
    width: '100%',
    url: url,
    playing: true
  });
};

DefaultVideoCompoent.propTypes = {
  srcType: _react.PropTypes.string,
  srcID: _react.PropTypes.string,
  url: _react.PropTypes.string
};
exports.default = DefaultVideoCompoent;