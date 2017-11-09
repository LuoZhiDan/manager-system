/**
 * rest服务
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const app = express();
const jwt = require('jsonwebtoken');
const tokenConfig = require('./src/common/config/token.config');

const userRouter = require('./src/user/routes/UserRouter');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));


// parse application/json
app.use(bodyParser.json());

app.use(cookie())

app.use('/rest/', function (req, res, next) {
    if(/^\/user\/login/.test(req.url)){
        next();
    } else {
        var token = req.cookies.MANAGER_SYSTEM_TOKEN;
        jwt.verify(token, tokenConfig.secret_key, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'token信息错误.' });
            } else {
                // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                console.log(decoded)
                next();
            }
        });
    }
});

/* user rest服务 */
app.use('/rest/user', userRouter);


app.listen(8001, () => {
    console.log("server is listening 8001, provide rest service")
})