const mongoose=require('mongoose');
const Faculty=require('../models/faculty');
const facultyCardSchema=new mongoose.Schema({
name:
{
    type:String,
    required:true
},

designation:{
    type:String,
    required:true
},

qualification:{
    type:String,
    required:true
},
areaOfInterest:{
    type:String,
    required:true
},

phone:
{
    type:String,
    required:true
},

email:
{
    type:String,
    required:true
},

facultyId:{
    type:String,
    required:true
},
faculty:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Faculty',
    
},

},{
    timestamps:true
});

const Facultycard=mongoose.model('Facultycard',facultyCardSchema);
module.exports=Facultycard;