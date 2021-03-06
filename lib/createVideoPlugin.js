'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _utils = require('./video/utils');

var _utils2 = _interopRequireDefault(_utils);

var _addVideo = require('./video/modifiers/addVideo');

var _addVideo2 = _interopRequireDefault(_addVideo);

var _DefaultVideoComponent = require('./video/components/DefaultVideoComponent');

var _DefaultVideoComponent2 = _interopRequireDefault(_DefaultVideoComponent);

var _constants = require('./video/constants');

var customType = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVideoPlugin = function createVideoPlugin() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _config$isVideo = config.isVideo;
  var isVideo = _config$isVideo === undefined ? function () {
    return false;
  } : _config$isVideo;
  var _config$getVideoSrc = config.getVideoSrc;
  var getVideoSrc = _config$getVideoSrc === undefined ? function () {
    return {};
  } : _config$getVideoSrc;
  var wrapperComponent = config.wrapperComponent;

  return {
    handlePastedText: function handlePastedText(text, html, _ref) {
      var getEditorState = _ref.getEditorState;
      var setEditorState = _ref.setEditorState;

      if (isVideo(text)) {
        setEditorState((0, _addVideo2.default)(getEditorState(), getVideoSrc(text)));
        return true;
      }
      if (_utils2.default.isYoutube(text)) {
        setEditorState((0, _addVideo2.default)(getEditorState(), _utils2.default.getYoutubeSrc(text)));
        return true;
      }
      if (_utils2.default.isVimeo(text)) {
        setEditorState((0, _addVideo2.default)(getEditorState(), _utils2.default.getVimeoSrc(text)));
        return true;
      }
      return false;
    },
    blockRendererFn: function blockRendererFn(contentBlock) {
      if (!contentBlock.getEntityAt(0)) {
        return null;
      }
      var blockType = contentBlock.getType();
      var entityData = _draftJs.Entity.get(contentBlock.getEntityAt(0)).getData();
      if (blockType === 'atomic' && entityData.type === customType.VIDEOTYPE) {
        return {
          component: wrapperComponent ? wrapperComponent : _DefaultVideoComponent2.default,
          props: entityData
        };
      }
      return null;
    }
  };
};

exports.default = createVideoPlugin;