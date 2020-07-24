import request from '@/utils/request'

export const getTest = (params, config) => {
  return request({
    url: '/',
    method: 'get',
    params,
    ...config
  })
}

export const postTest = (data, config) => {
  return request({
    url: '/',
    method: 'post',
    data,
    ...config
  })
}

