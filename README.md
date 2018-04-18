# movieticket-management-xy

> 影院订票系统-前端-vue全家桶+webpack
使用ES6规范

需求：

 前端使用vue框架，vue全家桶+webpack 使用ES6规范；具有查看影讯、选座、在线支付等功能，模仿猫眼电影网页端，注释要详细，带设计文档；

 后端使用springboot+mybatis+mysql+swagger；注释要详细，带设计文档；

 后端管理系统功能：添加影院、影厅、电影详情、电影图片，带echarts图表显示销售详情、流量高峰等信息。用layui-admin也可以（有正版）注释要详细，带设计文档；

 整体需求：前后端分离、交互只用json；后端管理系统也是单独分离的系统；

 后端项目地址：https://github.com/MxyEI/movieticket-back-end-xy
 前端项目地址：https://github.com/MxyEI/movieticket-front-end-xy
 后台管理系统项目地址：https://github.com/MxyEI/movieticket-management-xy

文件：论文一份；设计文档一份；前端代码（带完整注释）一套；后端代码（带完整注释）一套；后台管理系统（带完整注释）一套；截止日期 2018-04-20



## 安装淘宝源
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 首先全局安装vue-cli
npm install -g vue-cli

## 安装webpack模版
vue init webpack

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 说明

模板安装完之后：

build.js中添加一句

```
if(process.env.npm_config_preview){
                   server.start({
                     port: 9526,
                     directory: './dist',
                     file: '/index.html'
                   });
                   console.log('> Listening at ' +  'http://localhost:8080' + '\n')
                 }
```

index.js中：修改端口号并自动打开浏览器
```
// Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9527, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
```

main.js中添加如下：

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data generator

import * as filters from './filters' // global filter

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

```
