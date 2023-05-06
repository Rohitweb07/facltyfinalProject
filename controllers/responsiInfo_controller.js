const ResponsiInfo=require('../models/responsibilityInfo');
const FacultyCard=require('../models/facultyCard');

module.exports.create = async function(req, res) {
  try {
    

    await ResponsiInfo.create({
      present:req.body.present,
      past:req.body.past,
      facultycard:req.user.email,
      faculty: req.user?._id,
    
    });

    return res.redirect('back');
  } catch (err) {
    console.log('Error creating response:', err);
    return res.redirect('back');
  }
}



module.exports.responsiInfoInput=async function(req,res)
{
  
  return res.render('responsiInfoInput',{
    title:"responsiInfoinput"
  });
}

module.exports.responsiInfoShow=async function(req,res)
{
      
  try{
            const useremail=await FacultyCard.findOne({email:req.params.email});
            const currentemail=useremail.email;
           console.log(useremail);
          console.log(currentemail);
     const userD = await ResponsiInfo.find({});
     const userDemail=userD.facultycard;
     console.log(`userD is ${userD}`);
     console.log(userDemail);
     
      // const basicInfoShow=await BasicInfo.find({});
     return res.render('responsiInfoShow',{
      title:"reponsiInfoshow",
      
      useremail:useremail,
      userD:userD,
     currentemail:currentemail
     })

  }catch(err){
    console.log(`find error during responsi Info showing ${err}`);
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
      const basicInfoD = await ResponsiInfo.findById(req.params.id);
       const basicInfoDUser = basicInfoD.faculty.toString();
      
       if (req.user && basicInfoDUser == req.user.id) {
          await ResponsiInfo.findByIdAndDelete(basicInfoD);
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
  
  
  
  
  
    




