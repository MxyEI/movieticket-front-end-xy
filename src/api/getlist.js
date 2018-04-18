/**
 * Created by admin on 2017/5/19.
 */
import fetch from '../utils/http'
export function  login(data) {
  return fetch({
    url:'/login',
    method:'post',
    credentials: "include",
    data:data,
    transformRequest: [function (data) {
      data=JSON.stringify(data)
      return data;
    }]
    ,headers: {'Content-Type': 'application/json;charset=UTF-8'}
  })
}
