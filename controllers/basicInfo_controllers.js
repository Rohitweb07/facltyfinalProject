const BasicInfo = require('../models/basicInfo');
const FacultyCard=require('../models/facultyCard');

module.exports.create = async function(req, res) {
  try {
    

    await BasicInfo.create({
      teaching: req.body.teaching,
      education: req.body.education,
      areaofresearch: req.body.areaofresearch,
      professionalmembership:req.body.professionalmembership,
      researchId:req.body.researchId,
      facultycard:req.user.email,
      faculty: req.user?._id,
    
    });

    return res.redirect('/');
  } catch (err) {
    console.log('Error creating post:', err);
    return res.redirect('back');
  }
};

module.exports.basicInfoInput=async function(req,res)
{
  
  return res.render('basicInfoInput',{
    title:"basicInfoinput"
  });
}

module.exports.basicInfoShow=async function(req,res)
{
      
  try{
       const useremail=await FacultyCard.findOne({email:req.params.email}); 
      const currentemail=useremail.email;
          console.log(`faculltyy ${useremail}`);
      //console.log(currentemail);
     const userD = await BasicInfo.find({});
     const userDemail=userD.facultycard;
     //console.log(userD);
     //console.log(userDemail);
     
      // const basicInfoShow=await BasicInfo.find({});
     return res.render('basicInfoShow',{
      title:"basicInfoShow",
      useremail:useremail,
      userD:userD,
       currentemail:currentemail
     })

  }catch(err){
    console.log(`find error during basic Info showing`);
    return res.redirect('back');
  }
}

module.exports.basicInfoShowW=async function(req,res)
{
      
  try{
     const useremail=await FacultyCard.findOne({email:req.params.email});
     console.log(`basicinfo ${useremail}`);
      const currentemail=useremail.email;
     return res.render('basicInfoShow',{
      title:"basicInfoShow",
      useremail:useremail,
      currentemail:currentemail,
      
     })

  }catch(err){
    console.log(`find error during basic Info showing`);
    return res.redirect('back');
  }
}


module.exports.basicInfoInputOption=async function(req,res)
{
     return res.render('facultyInfoOptions',{
         title:"facultyInfoOptions"
     });

}


module.exports.destroy = async function(req, res) {
    try {
      const basicInfoD = await BasicInfo.findById(req.params.id);
       const basicInfoDUser = basicInfoD.faculty.toString();
      //  console.log(basicInfoD);
      //  console.log(req.user.id);
      //  console.log(basicInfoDUser);
      //  console.log(req.user);
      // console.log(post);
      // console.log(typeof(req.user.id));
      // console.log(typeof(postfaculty));
       if (req.user && basicInfoDUser == req.user.id) {
          await BasicInfo.findByIdAndDelete(basicInfoD);
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
  
  
  
  
  
    




