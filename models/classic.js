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
        wx.setStorageSync(this._getKey(res.index), res)
      }
    })
  }

  getNextOrPrevious(index, nextOrPrev, sCallback) {
    // 如果有缓存的话就走缓存
    let key = nextOrPrev === "next" ? this._getKey(index + 1) : this._getKey(index - 1)
    let classicData = wx.getStorageSync(key);
    // 没有的话发送请求，并存入缓存
    if(!classicData){
      this.request({
        url: 'classic/' + index + '/' + nextOrPrev,
        success: (res) => {
          sCallback(res)
          wx.setStorageSync(this._getKey(res.index), res)
        }
      })
    }else{
      sCallback(classicData)
    }
  }

  _getKey(index) {
    let key = 'classic-' + index;
    return key;
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