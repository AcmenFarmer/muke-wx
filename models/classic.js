import { HTTP } from '../utils/http'
class ClassicModel extends HTTP {
  // 获取最新一期期刊数据
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        // 保存最新一期期刊的index
        this._setNewIndex(res.index);
      }
    })
  }

  getNextOrPrevious(index, nextOrPrev, sCallback) {
    this.request({
      url: 'classic/' + index + '/' + nextOrPrev,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  // 是否是第一期
  isFirst(index) {
    return index == 1 ? true : false;
  }

  // 是否是最新一期
  isLast(currentIndex) {
    return this._getNewIndex() == currentIndex ? true : false;
  }

  _setNewIndex(index) {
    wx.setStorageSync('newIndex', index);
  }

  _getNewIndex() {
    return wx.getStorageSync('newIndex');
  }

}
export { ClassicModel }