const mongoose=require('mongoose');

const basicInfoSchema=new mongoose.Schema({
teaching:{
    type:String,
  
},

education:{
    type:String,
   
},

areaofresearch:{
    type:String,
    
},

professionalmembership:{
    type:String
},

researchId:{
    type:String,
    required:true
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

const BasicInfo=mongoose.model('BasicInfo',basicInfoSchema);
module.exports=BasicInfo;