/**
 * Created by Administrator on 2017/4/25 0025.
 */

import { Message } from 'element-ui';
import axios from 'axios'
export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      /*process.env.BASE_API*/
      baseURL:'http://192.168.1.188:9000/aiom' ,
      timeout: 2000 // 超时
    });
    instance(options)
      .then(response => {
        const res = response.data;
        resolve(res);
      })
      .catch(error => {
        Message({
          message: error,
          type: 'error',
          duration: 5 * 1000
        });
        console.log(error); // for debug
        reject(error);
      });
  });
}



