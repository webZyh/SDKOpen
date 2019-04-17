const crypto = require('crypto');

module.exports = {
    MD5_SUFFIX : 'fdsfsgsdgsdfgsgsgsfgsdgdga',  //签名加密后缀
    md5:function (str) {
        let obj = crypto.createHash('md5');
        obj.update(str);

        return obj.digest('hex');
    }
}