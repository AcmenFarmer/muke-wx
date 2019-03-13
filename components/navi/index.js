// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: {
      type: Boolean
    },
    last: {
      type: Boolean
    }
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

  // attached() {
  //   console.log('aaa=',this.properties)
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext: function (event) {
      // console.log("1=",this.properties.first)
      if(!this.properties.last){
        this.triggerEvent("left", {

        })
      }
    },
    onPrev: function (event) {
      if (!this.properties.first) {
        this.triggerEvent("right", {

        })
      }
    }
  }
})