// viết model
const mongoose = require('mongoose');
const sinhvienShema = new mongoose.Schema({
    
    name : {
        type : String,
    },
    class : {
        type : String,
    }
},{versionKey : false});

const sinhvien = mongoose.model('student',sinhvienShema);
module.exports=sinhvien;