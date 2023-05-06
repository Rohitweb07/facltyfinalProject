const ImageUpload=require('../models/imageUpload');

module.exports.upload=async function(req,res){

try{
       
    ImageUpload.uploadedAvatar(req,res,function(err){
    if(err){console.log(`***********multerError**********${err}`)}
      console.log(req.file);
      ImageUpload.create({
      avatar: ImageUpload.avatarPath +'/'+ req.file.filename,
      facultycard:req.user.email,
      faculty: req.user?._id,
    });
    return res.redirect('back');

    });
  
}catch(err)
{

 console.log(`error while uploading image ${err}`);
 return res.redirect('back');

}


}

module.exports.uploadProfilePicture=async function(req,res)
{
    const userImage=await ImageUpload.find({});
   return res.render('uploadProfilePicture',{
    title:'upladProfilePicture',
    userImage:userImage
   });

}