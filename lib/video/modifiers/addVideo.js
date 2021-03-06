'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addVideo;

var _draftJs = require('draft-js');

var _constants = require('../constants');

var customType = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addVideo(editorState, _ref) {
  var srcType = _ref.srcType;
  var srcID = _ref.srcID;
  var url = _ref.url;

  if (_draftJs.RichUtils.getCurrentBlockType(editorState) === 'atomic') {
    return editorState;
  }

  var entityKey = _draftJs.Entity.create('TOKEN', 'IMMUTABLE', {
    type: customType.VIDEOTYPE,
    srcType: srcType,
    srcID: srcID,
    url: url
  });

  return _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
}