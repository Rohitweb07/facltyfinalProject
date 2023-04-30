const mongoose=require('mongoose');

const facultySchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
email:
{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    require:true
},
role: { type: String, enum: ['faculty', 'admin'], default: 'faculty' },

},



   {
    timestamps:true

   });

const Faculty=mongoose.model('Faculty',facultySchema);

module.exports=Faculty;