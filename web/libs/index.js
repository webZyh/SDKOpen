module.exports = {
  checkLocalStorage: function(key,newTime,expDate) {
    let data = localStorage.getItem(key);
    if(!data){
      return false
    }
    let dataObj = JSON.parse(data);
    if (newTime - dataObj.time < expDate) {
      //未过期，返回值
      return dataObj.value;
    }else{
      localStorage.removeItem(key);
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
