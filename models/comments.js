var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    firstName : String,
    companyName : String,
    comment : String,
    created : {type : Date, default : Date.now}
});

module.exports = mongoose.model('comment', commentSchema);
