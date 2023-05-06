const mongoose=require('mongoose');

const responsibilityInfoSchema=new mongoose.Schema({
    present:{
    type:String,
},

past:{
  type:String,   
},

faculty:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Faculty'
},

facultycard:
{
    type:mongoose.Schema.Types.String,
    ref:'Facultycard'
}
},

{
    timestamps:true
})

const ResponsiInfo=mongoose.model('ResponsiInfo',responsibilityInfoSchema);
module.exports=ResponsiInfo;