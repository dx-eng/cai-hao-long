import request from '@/utils/request.js';

export const update = (row) => {
    return request({
      url: '/api/baseDept/update',
      method: 'get',
      data: {parameter:row}
    })
  };
//https://dc.3.cn/category/get?callback=getCategoryCallback
  export const getData = () => {
      return request({
        url: '/api/edu/a',
        method: 'get',
        data: ""
      })
  }