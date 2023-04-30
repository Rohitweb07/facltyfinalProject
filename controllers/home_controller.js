const { response } = require("express");
 const Facultycard=require('../models/facultyCard');
// module.exports.home=function(req,res){
//     return res.render('home',{
//         title:"homepage"
//     });
// }

module.exports.home=async function(req,res)
{
    try {
       
      const facultycard=await Facultycard.find({});
        return res.render('home',{
            title:"homepage",
            facultycard:facultycard
        });
      
        
      } catch (err) {
        console.log('Error creating post:', err);
        return res.redirect('back');
      }
}

