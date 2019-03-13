import { HTTP } from '../utils/http'

class LikeModel extends HTTP {
  _likeSave(status, artId, type) {
    let url = status ? '/like' : '/like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: type
      }
    })
  }
  _getLikeStatus(type, id, sCallBack) {
    this.request({
      url: 'classic/' + type + '/' + id + '/favor',
      success: (res) => {
        sCallBack(res)
      }
    })
  }
}

export { LikeModel }