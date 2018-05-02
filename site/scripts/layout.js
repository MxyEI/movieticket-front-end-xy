(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  var global_api = {
    // 检查是否登录
    checkLogin: global_url + '/resource/session/check'

    /*点击LOGO回到主页开始*/
  };var head_bar_img = document.getElementById('head_bar_img');
  if (head_bar_img !== null) {
    head_bar_img.onclick = function () {
      window.location = '../index.html';
    };
  }
  /*点击LOGO回到主页结束*/

  // checkLogin
  function checkLogin() {
    $.ajax({
      url: global_api.checkLogin,
      type: "GET",
      xhrFields: {
        withCredentials: true
      },
      success: function success(data) {
        if (data.phoneNum === '') {
          window.location = '/layouts/register_login.html';
        } else {
          window.location = '/layouts/account.html?phone=' + data.phoneNum;
        }
      }
    });
  }

  /*点击首页账户按钮跳转到帐号页面*/
  var head_user = document.getElementById('head_user');
  if (head_user !== null) {
    head_user.onclick = function () {
      checkLogin();
    };
  }
  /*点击首页账户按钮跳转到帐号页面*/

  /*点击其他页面的账户按钮跳转到帐号页面*/
  var head_bar_count = document.getElementById('head_bar_count');
  if (head_bar_count !== null) {
    head_bar_count.onclick = function () {
      checkLogin();
    };
  }
  /*点击其他页面的账户按钮跳转到帐号页面*/

  /*点击首页取票按钮进入取票页面*/
  var head_get_ticket = document.getElementById('head_get_ticket');
  if (head_get_ticket !== null) {
    head_get_ticket.onclick = function () {
      window.location = '/layouts/get_ticket.html';
    };
  }
});
},{}]},{},[1])