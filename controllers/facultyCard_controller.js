const Facultycard=require('../models/facultyCard');


module.exports.facultyform=async function(req,res)
{
   res.render('addfaculty',{
    title:"faculty|List"
   });
}

module.exports.create=async function(req,res)
{

   try{
    if (!req.user) {
        throw new Error('User not authenticated');
      } 

      Facultycard.uploadedAvatar(req,res,function(err){
        if(err){console.log(`*********multerError********${err}`)}
  
        Facultycard.create({
        name:req.body.name,
        designation:req.body.designation,
        qualification:req.body.qualification,
        areaOfInterest:req.body.areaOfInterest,
        phone:req.body.phone,
        email:req.body.email,
        avatar: Facultycard.avatarPath +'/'+ req.file.filename,
        facultyId:req.body.facultyId,
        faculty: req.user?.id,
      });
      return res.redirect('/');
    });
  
      
    } catch (err) {
      console.log('Error creating post:', err);
      return res.redirect('back');
   }
}

module.exports.destory=async function(req,res)
{
  try {
    const facultycard = await Facultycard.findById(req.params.id);
    console.log(facultycard);
    if (req.user.role=='admin') {
        await Facultycard.findByIdAndDelete(facultycard);
      res.redirect('back');
    } else {
      res.redirect('back');
    }
  } catch(err) {
    console.log(`error while deleting ${err}`);
    res.redirect('back');
  }
}


module.exports.cardfacultysignin=async function(req,res)
{
    return res.render('cardfaculty_sign_in',{
        title:"cardfacultySignin"
    });
}


module.exports.cardfacultycreateSession=  async function(req,res){

  const user=await Facultycard.findOne({facultyId:req.body.facultyId});
  console.log(`cardfacultydata ${user}`);
   if(!user)
   {
      return res.redirect('back');
   }
   return res.redirect('/post/profile');
}