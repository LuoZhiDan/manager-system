/* 
    user model
*/

const mongoose = require('../../common/config/db.config');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {type: String, minlength: 6, maxlength: 12},
    pwd : {type: String, minlength: 6, maxlength: 12},
    role : {type: Number, default: 1}
})


module.exports = mongoose.model('user_db', UserSchema);
