const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
aboutme:{
    type:String,
    required:true
},

faculty:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Faculty'
}
},

{
    timestamps:true
})

const Post=mongoose.model('Post',postSchema);
module.exports=Post;