
var userService = require('./UserAction');


/* userService.createUser({
    name : "luozhidan",
    pwd: '123456'
}, (err, result)=>{
    console.log(result)
}) */

/* userService.findUser({
    name : 'luozhidan', //查询时, name必须加上引号
}, function(err, result){
    console.log(result)
}) */


userService.updatePwd({
    name : 'luozhidan',
    pwd: '123456'
}, '1234567', function(err, result){
    console.log(result)
})


