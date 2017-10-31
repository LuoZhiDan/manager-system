const UserModel = require('../model/index');

const user = new UserModel({
    name : 'zhangfsdfsd',
    pwd : '123456'
})

user.save(function(){
    console.log(1212121)
})