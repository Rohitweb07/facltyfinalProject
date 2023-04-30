const Post = require('../models/post');

module.exports.create = async function(req, res) {
  try {
    

    await Post.create({
      aboutme: req.body.aboutme,
      faculty: req.user?._id,
    
    });

    return res.redirect('back');
  } catch (err) {
    console.log('Error creating post:', err);
    return res.redirect('back');
  }
};


module.exports.about=async function(req,res)
{
    try {
       
      const post=await Post.find({}).populate('faculty').exec();
        return res.render('about',{
            title:"about",
            post:post
        });
      
        
      } catch (err) {
        console.log('Error creating post:', err);
        return res.redirect('back');
      }
}

module.exports.responsbility=async function(req,res)
{
    try {
        if (!req.user) {
          throw new Error('User not authenticated');
        } 
       
      const post=await Post.find({}).populate('faculty').exec();
        return res.render('responsbility',{
            title:"responsbility",
            post:post
        });
      
        
      } catch (err) {
        console.log('Error creating post:', err);
        return res.redirect('back');
      }
}


module.exports.destroy = async function(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      const postfaculty = post.faculty.toString();
      console.log(postfaculty);
      console.log(req.user.id);
      console.log(post);
      console.log(typeof(req.user.id));
      console.log(typeof(postfaculty));
      if (req.user && postfaculty == req.user.id) {
          await Post.findByIdAndDelete(post);
        res.redirect('back');
      } else {
        res.redirect('back');
      }
    } catch(err) {
      console.log(`error while deleting ${err}`);
      res.redirect('back');
    }
  }
  
  
  
  
  
    




