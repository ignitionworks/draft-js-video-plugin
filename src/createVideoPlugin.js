import React from 'react';
import { Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props'
import utils from './video/utils';
import addVideo from './video/modifiers/addVideo';
import defaultCompoent from './video/components/DefaultVideoComponent';

const createVideoPlugin = (config = {}) => {
  const {
    isVideo = () => false,
    getVideoSrc = () => ({}),
    wrapperComponent,
  } = config;
  return {
    handlePastedText: (text, html, { getEditorState, setEditorState }) => {
      if (utils.isYoutube(text)) {
        setEditorState(addVideo(getEditorState(), utils.getYoutubeSrc(text)));
        return true;
      }
      if (utils.isVimeo(text)) {
        setEditorState(addVideo(getEditorState(), utils.getVimeoSrc(text)));
        return true;
      }
      if (isVideo(text)) {
        setEditorState(addVideo(getEditorState(), getVideoSrc(text)));
        return true;
      }
      return false;
    },
    blockRendererFn: (contentBlock) => {
      if (!contentBlock.getEntityAt(0)) {
        return null;
      }
      const blockType = contentBlock.getType();
      const entityData = Entity
        .get(contentBlock.getEntityAt(0))
        .getData();
      if (blockType === 'atomic') {
        return {
          component: wrapperComponent ? decorateComponentWithProps(wrapperComponent,entityData) : decorateComponentWithProps(defaultCompoent,entityData),
        };
      }
      return null;
    },
  };
};


export default createVideoPlugin;

