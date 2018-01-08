const UserModel = require('../model/userModel');
const commonUtil = require('../../common/util/CommonUtil');

/**
 * 查询用户
 * @method findUser
 * @param {User} user 
 * @param {Function} callback 
 */
function findUser(user, callback){
    UserModel.findOne(commonUtil.toJSON(user), callback)
}


function createUser(user, callback){
    let userDb = new UserModel(user);
    userDb.save(callback);
}

function update(user, doc, callback){
    UserModel.update(user, doc, {multi: true}, callback);
}

module.exports = {
    findUser,
    createUser,
    update
}