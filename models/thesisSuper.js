const mongoose=require('mongoose');

const thesisSuperSchema=new mongoose.Schema({
    researchtopic:{
        type:String,
    },
    nameofStudent:
    {
        type:String
    },
    completionRegistrationYear:
    {
          type:String
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

const ThesisSuper=mongoose.model('ThesisSuper',thesisSuperSchema);
module.exports=ThesisSuper;