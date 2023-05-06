const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');

const AVATAR_PATH=path.join('/uploads/users/avatars');
const imageUploadSchema= new mongoose.Schema({
avatar:{

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
},{
    timestamps:true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  });

//statics
imageUploadSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
imageUploadSchema.statics.avatarPath=AVATAR_PATH;


const ImageUpload=mongoose.model('ImageUpload',imageUploadSchema);
module.exports=ImageUpload;