import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet'

export default {
  //医院设置列表
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hosptialSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj//使用json
    })
  },
  //删除医院设置
  deleteHospSet(id){
    return request({
      url: `/admin/hosp/hosptialSet/${id}`,
      method: 'delete'
  })
  },
  //批量删除
  batchRemoveHospSet(idList){
    return request({
      url: `/admin/hosp/hosptialSet/batchRemove`,
      method: 'delete',
      data:idList
    })  
  },
  //锁定和取消锁定
  lockHospSet(id,status){
    return request({
      url: `/admin/hosp/hosptialSet/lockHospSet/${id}/${status}`,
      method: 'put'
    })  
  },
  //添加医院设置
  saveHospSet(hospitalSet){
    return request({
      url: `/admin/hosp/hosptialSet/saveHospitalSet`,
      method: 'post',
      data:hospitalSet
    }) 
  },
  //医院设置id查询
  getHospSet(id){
    return request({
      url: `/admin/hosp/hosptialSet/getHospSet/${id}`,
      method: 'get'
    }) 
  },

  //修改医院设置
  updateHospSet(hospitalSet){
    return request({
      url: `/admin/hosp/hosptialSet/updateHospSet/${id}`,
      method: 'post',
      data:hospitalSet
    }) 
  }
}
