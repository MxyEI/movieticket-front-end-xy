/**
 * Created by admin on 2017/5/24.
 */
var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
  var len = len - (s + '').length;
  for (var i = 0; i < len; i++) { s = '0' + s; }
  return s;
};

export default {
  getQueryStringByName: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
      context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
  },
  formatDate: {


    format: function (date, pattern) {
      pattern = pattern || DEFAULT_PATTERN;
      return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
          case 'y': return padding(date.getFullYear(), $0.length);
          case 'M': return padding(date.getMonth() + 1, $0.length);
          case 'd': return padding(date.getDate(), $0.length);
          case 'w': return date.getDay() + 1;
          case 'h': return padding(date.getHours(), $0.length);
          case 'm': return padding(date.getMinutes(), $0.length);
          case 's': return padding(date.getSeconds(), $0.length);
        }
      });
    },
    parse: function (dateString, pattern) {
      var matchs1 = pattern.match(SIGN_REGEXP);
      var matchs2 = dateString.match(/(\d)+/g);
      if (matchs1.length == matchs2.length) {
        var _date = new Date(1970, 0, 1);
        for (var i = 0; i < matchs1.length; i++) {
          var _int = parseInt(matchs2[i]);
          var sign = matchs1[i];
          switch (sign.charAt(0)) {
            case 'y': _date.setFullYear(_int); break;
            case 'M': _date.setMonth(_int - 1); break;
            case 'd': _date.setDate(_int); break;
            case 'h': _date.setHours(_int); break;
            case 'm': _date.setMinutes(_int); break;
            case 's': _date.setSeconds(_int); break;
          }
        }
        return _date;
      }
      return null;
    }

  },
  formatPrice:{
    units:'个拾佰仟万@#%亿^&~',
    /*
     字符
     */
    chars:'零壹贰叁肆伍陆柒捌玫拾',
    numberToChinese:function(number){
      var a=(number+'').split(''),s=[],t=this;
      if(a.length>12){
        throw new Error('too big');
      }else{
        for(var i=0,j=a.length-1;i<=j;i++){
          if(j==1||j==5||j==9){//两位数 处理特殊的 1*
            if(i==0){
              if(a[i]!='1')s.push(t.chars.charAt(a[i]));
            }else{
              s.push(t.chars.charAt(a[i]));
            }
          }else{
            s.push(t.chars.charAt(a[i]));
          }
          if(i!=j){
            s.push(t.units.charAt(j-i));
          }
        }
      }
      //return s;
      return s.join('').replace(/零([拾佰千万亿@#%^&~])/g,function(m,d,b){//优先处理 零百 零千 等
        b=t.units.indexOf(d);
        if(b!=-1){
          if(d=='亿')return d;
          if(d=='万')return d;
          if(a[j-b]=='0')return '零'
        }
        return '';
      }).replace(/零+/g,'零').replace(/零([万亿])/g,function(m,b){// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
        return b;
      }).replace(/亿[万千百]/g,'亿').replace(/[零]$/,'').replace(/[@#%^&~]/g,function(m){
        return {'@':'拾','#':'佰','%':'仟','^':'拾','&':'佰','~':'仟'}[m];
      }).replace(/([亿万])([一-九])/g,function(m,d,b,c){
        c=t.units.indexOf(d);
        if(c!=-1){
          if(a[j-c]=='0')return d+'零'+b
        }
        return m;
      });
    }
  }
};
