
/**
 * rest服务
 */

 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();

 const userRouter = require('./src/user/routes/UserRouter');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/rest', (req, res, next)=>{
    
})

// parse application/json
app.use(bodyParser.json());



/* user rest服务 */
app.use('/rest/user', userRouter);




 app.listen(8001, ()=>{
     setInterval(function(){
        console.log("server is listening 8001, provide rest service")
     }, 1000);
 })