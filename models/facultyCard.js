const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/uploads/users/avatars');


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

avatar:{
    type:String
}

},{
    timestamps:true
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });

  facultyCardSchema.statics.uploadedAvatar=multer({ storage: storage }).single('avatar');
  facultyCardSchema.statics.avatarPath=AVATAR_PATH;

const Facultycard=mongoose.model('Facultycard',facultyCardSchema);
module.exports=Facultycard;