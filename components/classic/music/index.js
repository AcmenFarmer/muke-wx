// components/classic/music/index.js
import {
  classicBeh
} from '../classic-beh';
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

  attached: function(){
    this._recoverStatus();
    this._monitorSwitch();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      if (!this.data.palying) {
        this.setData({
          palying: true
        })
        mMgr.title = this.properties.title;
        mMgr.src = this.properties.src;
      } else {
        this.setData({
          palying: false
        })
        mMgr.pause();
      }
    },
    _recoverStatus: function() {
      // 如果当前是暂停状态，设置图片为暂停状态
      if(mMgr.paused){
        this.setData({
          palying: false
        })
        return;
      }

      // src相同说明当前音乐为播放状态
      if(mMgr.src == this.properties.src){
        this.setData({
          palying: true
        })
      }
    },
    _monitorSwitch: function() {
      mMgr.onPlay(() => {
        this._recoverStatus();
      })
      mMgr.onPause(() => {
        this._recoverStatus();
      })
      mMgr.onStop(() => {
        this._recoverStatus();
      })
      mMgr.onEnded(() => {
        this._recoverStatus();
      })
    }
  }
})