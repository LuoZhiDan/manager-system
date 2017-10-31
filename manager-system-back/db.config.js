const DB_URL = 'mongodb://root:root@127.0.0.1:27017/manager-system';
const mongoose = require('mongoose');


mongoose.connect(DB_URL);

module.exports = mongoose;