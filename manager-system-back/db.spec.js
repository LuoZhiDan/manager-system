const DB_URL = 'mongodb://root:root@127.0.0.1:27017/manager-system';
const mongoose = require('mongoose');

mongoose.connect(DB_URL);

var UserSchema = new mongoose.Schema({
    name : String,
    pwd : String
})

var User = mongoose.model('User', UserSchema);

var user = new User({
    name : 'luozhidan',
    pwd : '1234566'
})

console.log(user)

user.save(()=>{
    console.log(121212)
})