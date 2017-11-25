var mongoose = require('mongoose');

var signInSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    companyName : String,
    like:{type:Number, default:0},
    position : String,
    message : String,
    comments:[
        {
            _id:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            },
            firstName : String,
            companyName : String,
            comment : String,
            created : {type : Date, default : Date.now}
        }
        
        ],
    created : {type : Date, default : Date.now}
});

module.exports = mongoose.model('signIn', signInSchema);


// var signInSchema = new mongoose.Schema({
//     firstName : String,
//     lastName : String,
//     companyName : String,
//     position : String,
//     companyLogo : String,
//     message : String,
//     like : Number,
//     disLike: Number,
//     comments:[
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Comment'
//         }
        
//         ],
//     created : {type : Date, default : Date.now}
// });