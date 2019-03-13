// components/classic/music/index.js
import { classicBeh } from '../classic-beh'
Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@playing.png',
    playSrc: 'images/player@waitting.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
