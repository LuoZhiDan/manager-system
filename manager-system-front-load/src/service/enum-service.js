const errorObj = require('../common/config/errorcode.config') ;
const enumObj = require('../common/config/enum.config');

module.exports = function(){
    this.get = (name) => {
        return enumObj[name] || errorObj[name];
    }
}