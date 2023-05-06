const mongoose=require('mongoose');

const otherAcademicSchema=new mongoose.Schema({
    keynoteaddressinvitedtalksinconferencesworkshops:
    {
        type:String,
    },
    awardandhonors:
    {
        type:String
    },
    conferencesworkshopssymposiumshorttermcoursesorganized:
    {
        type:String,
    },  
 
ongoingprojects:
{
    type:String
},

projectscompleted:
{
    type:String
},

expertlectures:
{
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

const OtherAcademic=mongoose.model('OtherAcademic',otherAcademicSchema);
module.exports=OtherAcademic;