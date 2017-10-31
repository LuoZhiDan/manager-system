const express = require('express');
const router = express.Router();

const UserModel = require('../model/index');

/* 查询 */
router.get('/', (req, res)=>{
    
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
        }
    });
})


/* 删除 */
router.delete('/', (req, res)=>{

})


/* 更新 */
router.put('/', (req, res)=>{

})

module.exports = router;

