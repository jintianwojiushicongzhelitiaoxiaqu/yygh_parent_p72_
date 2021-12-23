import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet'

export default {
  //数据字典列表
  dictList(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  },
}
