# DraftJS Video Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin allows you to add Videos to your editor!

Basic Usage:

```js
import createVideoPlugin from 'draft-js-video-plugin';

const mentionPlugin = createVideoPlugin();

```
Advanced Usage:
```js
import createVideoPlugin from 'draft-js-video-plugin';

const mentionPlugin = createVideoPlugin({
    isVideo: function(url){
    //take url check if it's a valid video url return true or false
    },
    getVideoSrc: function(url){
    //parse url to videoSrc object which will pass to WrapperComponent as props
        return {
            srcID: id,
             srcType: 'youtube',
             url,
        }
    },
    wrapperComponent, // react component
});

```
TODO: PR welcome
