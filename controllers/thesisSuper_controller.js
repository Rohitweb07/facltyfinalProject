const ThesisSuper=require('../models/thesisSuper');
const FacultyCard=require('../models/facultyCard');

module.exports.create = async function(req, res) {
  try {
    
        
    await ThesisSuper.create({
        researchtopic:req.body.researchtopic,
        nameofStudent:req.body.nameofStudent,
        completionRegistrationYear:req.body. completionRegistrationYear,
       facultycard:req.user.email,
       faculty: req.user?._id,
    
    });

    return res.redirect('back');
  } catch (err) {
    console.log('Error creating AcademicInfo:', err);
    return res.redirect('back');
  }
}



module.exports.thesisSuperInfoInput=async function(req,res)
{
  
  return res.render('thesisSuperInfoInput',{
    title:"thesisSuperInfoInput"
  });
}


 module.exports.thesisSuperInfoShow=async function(req,res)
{
      
  try{
            const useremail=await FacultyCard.findOne({email:req.params.email});
            const currentemail=useremail.email;
           console.log(useremail);
          console.log(currentemail);
     const userD = await ThesisSuper.find({});
     const userDemail=userD.facultycard;
     console.log(`userD is ${userD}`);
     console.log(userDemail);
     
      // const basicInfoShow=await BasicInfo.find({});
     return res.render('thesisSuperInfoShow',{
      title:"ThesisSuperInfoShow",
      useremail:useremail,
      userD:userD,
     currentemail:currentemail
     })

  }catch(err){
    console.log(`find error during Academic Info showing ${err}`);
    return res.redirect('back');
  }
}


// module.exports.basicInfoInputOption=async function(req,res)
// {
//      return res.render('facultyInfoOptions',{
//          title:"facultyInfoOptions"
//      });

// }


module.exports.destroy = async function(req, res) {
    try {
      const basicInfoD = await ThesisSuper.findById(req.params.id);
       const basicInfoDUser = basicInfoD.faculty.toString();
      
       if (req.user && basicInfoDUser == req.user.id) {
          await ThesisSuper.findByIdAndDelete(basicInfoD);
         res.redirect('back');
       } else {
         res.redirect('back');
       }
    } catch(err) {
      console.log(`error while deleting ${err}`);
      res.redirect('back');
    }
  }
  


module.exports.updates=async function(req ,res)
{

try{

       const user=await ThesisSuper.findByIdAndUpdate(req.params.id,req.body);

       return res.redirect('/');

}catch(err)
{

console.log(`error while edit thiis super ${err}`)

}
}

module.exports.editshow=async function(req ,res)
{

try{
        const useremail=await FacultyCard.findOne({email:req.params.email});
       const currentemail=useremail.email;
       const userD=await ThesisSuper.find({});
       console.log(`eee${currentemail}`);
       console.log(`rrrrrr${userD}`);

      return res.render('editThesisInfo',{
        title:"editthesis",
         userD:userD,
         currentemail:currentemail
      });

}catch(err)
{

console.log(`error while edit thiis super ${err}`)

}



}








  // module.exports.basicInfo=async function(req,res)
// {
//     try {
       
//       const post=await BasicInfo.find({}).populate('faculty').exec();
//         return res.render('about',{
//             title:"about",
//             post:post
//         });
      
        
//       } catch (err) {
//         console.log('Error creating post:', err);
//         return res.redirect('back');
//       }
// }

// module.exports.responsbility=async function(req,res)
// {
//     try {
//         if (!req.user) {
//           throw new Error('User not authenticated');
//         } 
       
//       const post=await Post.find({}).populate('faculty').exec();
//         return res.render('responsbility',{
//             title:"responsbility",
//             post:post
//         });
      
        
//       } catch (err) {
//         console.log('Error creating post:', err);
//         return res.redirect('back');
//       }
// }


// module.exports.destroy = async function(req, res) {
//     try {
//       const post = await Post.findById(req.params.id);
//       const postfaculty = post.faculty.toString();
//       console.log(postfaculty);
//       console.log(req.user.id);
//       console.log(post);
//       console.log(typeof(req.user.id));
//       console.log(typeof(postfaculty));
//       if (req.user && postfaculty == req.user.id) {
//           await Post.findByIdAndDelete(post);
//         res.redirect('back');
//       } else {
//         res.redirect('back');
//       }
//     } catch(err) {
//       console.log(`error while deleting ${err}`);
//       res.redirect('back');
//     }
//   }
  
  
  
  
  
    




