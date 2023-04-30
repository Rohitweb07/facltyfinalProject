const Faculty=require('../models/faculty');
const Cardfaculty=require('../models/facultyCard');

module.exports.profile=async function(req,res){
    
    
    try {
       
        const faculty=await Cardfaculty.find({})
          return res.render('user_profile',{
              title:"userprofile",
              faculty:faculty,
              
          });
        
          
        } catch (err) {
          console.log('Error creating post:', err);
          return res.redirect('back');
        }

}

module.exports.checkfaculty=async function(req,res)
{
    return res.render('checkfaculty',{
        title:'checkfaculty',
    });
}

//render the signup
module.exports.signUp=function(req,res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    

    return res.render('faculty_sign_up',{
        title:'faculty | SignUp'
    });
}



//render the signin
module.exports.signIn=function(req,res){
    
    if (req.isAuthenticated()){
         
        return res.redirect('/');
        }
        
        
    
   
    
    return res.render('faculty_sign_in',{
        title:`faculty | SignIn`,
    });
}



//get the signup data
module.exports.create=async function(req,res){
    //to do latter
    try{
    console.log(req.body.password);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
       const user= await Faculty.findOne({email:req.body.email});
          if(!user){
                    await Faculty.create(req.body);
                
                     return res.redirect('/users/sign-in'); 
            }
            if(user)
            {
                return res.redirect('/users/sign-up');
            }
           else{
            return  res.redirect('back');
          }
    }catch(err){
        console.log(`error while signingup`);
    }
}

//user sign and create the session for user
module.exports.createSession=  function(req,res){

   
    

      return res.redirect('/');
}




module.exports.signOut = function(req, res,next){
  req.logout(function(err) {
   if (err) { return next(err); }
   
   res.redirect('/');
 });

}