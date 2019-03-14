// components/classic/music/index.js
import { classicBeh } from '../classic-beh';
const mMgr = wx.getBackgroundAudioManager();
Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    palying: false,
    pauseSrc: 'images/player@playing.png',
    playSrc: 'images/player@waitting.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      this.setData({
        palying: true
      })
      mMgr.title = this.properties.title;
      mMgr.src = this.properties.src;
    }
  }
})
