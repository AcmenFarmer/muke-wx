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
}

export { LikeModel }