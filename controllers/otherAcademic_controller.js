const AcademicInfo=require('../models/otherAcademic');
const FacultyCard=require('../models/facultyCard');

module.exports.create = async function(req, res) {
  try {
    

    await AcademicInfo.create({
      keynoteaddressinvitedtalksinconferencesworkshops: req.body.keynoteaddressinvitedtalksinconferencesworkshops,
      awardandhonors:req.body.awardandhonors,
      conferencesworkshopssymposiumshorttermcoursesorganized:req.body.conferencesworkshopssymposiumshorttermcoursesorganized,
      
      ongoingprojects:req.body.ongoingprojects,
      projectscompleted:req.body.projectscompleted,
      expertlectures:req.body.expertlectures,
      facultycard:req.user.email,
      faculty: req.user?._id,
    
    });
     
    return res.redirect('/');
  } catch (err) {
    console.log('Error creating AcademicInfo:', err);
    return res.redirect('back');
  }
}



module.exports.academicInfoInput=async function(req,res)
{
  
  return res.render('otherAcademicInput',{
    title:"otherAcademic"
  });
}

 module.exports.academicInfoShow=async function(req,res)
{
      
  try{
            const useremail=await FacultyCard.findOne({email:req.params.email});
            const currentemail=useremail.email;
           const useremailavatar=useremail.avatar;
          //  console.log(`userfacultycard ${useremail}`);
          //  console.log(useremailavatar);
          // console.log(currentemail);
     const userD = await AcademicInfo.find({});
     const userDemail=userD.facultycard;
    
    //  console.log(`userDemail${userD}`);
     
      // const basicInfoShow=await BasicInfo.find({});
     return res.render('academicInfoShow',{
      title:"academicInfoshow",
      useremail:useremail,
      userD:userD,
     currentemail:currentemail,
     });

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
      const basicInfoD = await AcademicInfo.findById(req.params.id);
       const basicInfoDUser = basicInfoD.faculty.toString();
      
       if (req.user && basicInfoDUser == req.user.id) {
          await AcademicInfo.findByIdAndDelete(basicInfoD);
         res.redirect('back');
       } else {
         res.redirect('back');
       }
    } catch(err) {
      console.log(`error while deleting ${err}`);
      res.redirect('back');
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
  
  
  
  
  
    




