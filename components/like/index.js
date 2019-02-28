// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    likeCount: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesLike: "images/like.png",
    noLike: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(e) {
      let like = this.properties.like;
      let likeCount = this.properties.likeCount;
      likeCount = like ? likeCount - 1 : likeCount + 1;
      this.setData({
        likeCount: likeCount,
        like: !like
      })

      // 激活、暴露自定义事件
      let likeStatus = this.properties.like;
      console.log('likeStatus=',likeStatus)
      this.triggerEvent('like', {
        likeStatus: likeStatus
      },{})

    }
  } 
})
