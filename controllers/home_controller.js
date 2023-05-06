const { response } = require("express");
 const Facultycard=require('../models/facultyCard');
 const ImageUpload=require('../models/imageUpload');
 const Faculty=require('../models/faculty');
module.exports.home=async function(req,res)
{
    try {
      const userImage= await ImageUpload.find({});
      
      const facultycard=await Facultycard.find({});
        return res.render('home',{
            title:"homepage",
            facultycard:facultycard,
            userImage:userImage
            
        });
      
        
      } catch (err) {
        console.log('Error creating post:', err);
        return res.redirect('back');
      }
}

module.exports.detailsdashboard=async function(req,res)
{
      
  try{
        
       const useremail=await Facultycard.findOne({email:req.params.email});
       const faculty=await Faculty.findOne({email:req.params.email});
       
      const currentemail=useremail.email;   
      console.log(`currentloginemail ${currentemail}`);
      return res.render('detailsDashboard',{
      title:"detailsdashboard",
      faculty:faculty,
      useremail:useremail,
       currentemail:currentemail, 
      
     });
          
  }catch(err){
    console.log(`find error during detalsdashboard showing`);
    return res.redirect('back');
  }
}
