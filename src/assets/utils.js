const publicMethod = { //当前时间转成日期格式 
 
    //时间戳转换成日期时间
    getTimestamp:  function (date, fmt) {
      
      if (/(y+)/.test(fmt)) {
       fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      let o = {
       'M+': date.getMonth() + 1,
       'd+': date.getDate(),
       'h+': date.getHours(),
       'm+': date.getMinutes(),
       's+': date.getSeconds()
      };
      for (let k in o) {
       if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
       }
      }
      return fmt;
      function padLeftZero(str) {
        return ('00' + str).substr(str.length);
       }
     },
     showTips: function (msg) {
       var div = document.createElement('div')
       div.innerHTML = msg;
       div.style.backgroundColor="#007fff"
       div.style.color="white"
       div.style.borderRadius="5px"
       div.style.padding="6px 12px"
       div.style.position="fixed";
       div.style.left="60px";
       div.style.top="400px";
       div.style.zIndex="5626465";
       document.body.append(div)
       setTimeout(() => {
         div.parentNode.removeChild(div)
       }, 1000);

     }
    
     
     
   
   
  }
  export default{
    publicMethod
  }
