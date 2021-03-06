import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'

const classicModel = new ClassicModel();
const likeModel = new LikeModel();

// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: {},
    last: true,
    first: false,
    likeStatus: null,
    favNums: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classicData: res,
        likeStatus: res.like_status,
        favNums: res.fav_nums
      })
    })
  },

  onLike: function(event) {
    let likeStatus = event.detail.likeStatus
    likeModel._likeSave(likeStatus, this.data.classicData.id, this.data.classicData.type)
  },

  onNext: function (event) {
    this._updateClassic('next')
  },

  onPrev: function (event) {
    this._updateClassic('previous') 
  },

  _updateClassic: function (nextOrPrev) {
    let index = this.data.classicData.index;
    classicModel.getNextOrPrevious(index, nextOrPrev, (res) => {
      this.setData({
        classicData: res,
        last: classicModel.isLast(res.index),
        first: classicModel.isFirst(res.index)
      })

      // 重新调用like组件状态，解决缓存问题
      likeModel._getLikeStatus(res.type, res.id, (res) => {
        this.setData({
          likeStatus: res.like_status,
          favNums: res.fav_nums
        })
      })
    })
  },
  /**
   * 生命周期函数--监 听页面初次渲染完成
   */ 
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})