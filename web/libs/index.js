module.exports = {
  checkLocalStorage: function(key,newTime,expDate) {
    let data = localStorage.getItem(key);
    if(!data){
      return false
    }
    if(typeof data == Object){  //判断key中存储的是否是对象,如果不做判断，key为字符串时会报错
      let dataObj = JSON.parse(data);
      if (newTime - dataObj.time < expDate) {
        //未过期，返回值
        return dataObj.value;
      }else{
        localStorage.removeItem(key);
      }
    }else{
      return false;
    }
  },

  getLocalStorage:function (key) {
    let data = localStorage.getItem(key);
    let dataObj = JSON.parse(data);
    if (dataObj){
      return dataObj.value;
    }else{
      return false;
    }
  }
}
