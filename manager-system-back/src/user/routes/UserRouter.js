const express = require('express');
const router = express.Router();
const userAction = require('../action/UserAction');
const jwt = require('jsonwebtoken');
const tokenConfig = require('../../common/config/token.config');
const code = require('../../common/config/code.config')


/* 查询 */
router.get('/', (req, res)=>{
    
})


router.get('/login', (req, res)=>{
    let param = req.query,
        token,
        user = {
            name : param.name,
            pwd : param.pwd
        };

    userAction.findUser(user, (err, result)=>{
        // 用户名密码正确
        if(result && result.name === user.name && result.pwd === user.pwd){
            token = jwt.sign(user, tokenConfig.secret_key);
            res.json({
                token : token
            })
        // 不正确
        } else {
            res.sendStatus(code.ERROR_CODE_LOGIN);
        }
    })
})


/* 创建 */
router.post('/', (req, res)=>{
    let user = req.body;

    if(!user || !user.name || !user.pwd){
        res.send({
            // 每一种状态码代表一种结果, 定义常量
            status : 601,
        });
    }

    let userDb = new UserModel(user);
    userDb.save((err, result)=>{
        if(!err){
            // 200表示成功
            res.send({
                status : 200
            })
        } else {
            res.send({
                // 每一种状态码代表一种结果, 定义常量
                status : 601,
            });
        }
    });
})


/* 删除 */
router.delete('/', (req, res)=>{

})


/* 更新 */
router.put('/updatePwd', (req, res)=>{
    const currentUser = req.user,
        pwdCfg = req.body;
    if(currentUser.pwd !== pwdCfg.pwd){
        //密码错误
        res.json({
            status : code.ERROR_PWD
        });
    } else {
        userAction.update({
            name : currentUser.name
        }, {
            pwd : pwdCfg.newPwd
        }, (err)=>{
            if(!err){
                res.json({
                    status : code.SUCCESS_CODE
                });
            } else {
                res.json({
                    status : code.ERROR_PWD
                });
            }
        });
    }
});

module.exports = router;

