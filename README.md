# movieticket-management-xy

> 影院订票系统-后台管理-vue全家桶+webpack
使用ES6规范

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
                   console.log('> Listening at ' +  'http://localhost:9526' + '\n')
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
