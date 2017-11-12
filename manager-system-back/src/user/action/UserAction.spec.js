
var userService = require('./UserService');


/* userService.createUser({
    name : "luozhidan",
    pwd: '123456'
}, (err, result)=>{
    console.log(result)
}) */

userService.findUser({
    name : 'luozhidan', //查询时, name必须加上引号
}, function(err, result){
    console.log(result)
})


