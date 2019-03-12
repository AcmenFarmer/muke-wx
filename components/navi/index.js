// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    last: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    rightSrc: './images/triangle@right.png',
    leftSrc: './images/triangle@left.png',
    disRightSrc: './images/triangle.dis@right.png',
    disLeftSrc: './images/triangle.dis@left.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext: function(event) {
      console.log("1=",this.properties.first)
      this.triggerEvent("left", {

      })
    },
    onPrev: function (event) {
      console.log("2=",this.properties.last)
      this.triggerEvent("right", {

      })
    }
  }
})
