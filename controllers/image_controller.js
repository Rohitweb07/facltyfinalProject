// const Image=require('../models/images');

// module.exports.create = async function(req, res) {
//     try {
//       if (!req.user) {
//         throw new Error('User not authenticated');
//       } 
  
//       await Post.create({
//         image: req.body.image,
//         faculty: req.user._id
//       });
  
//       return res.redirect('back');
//     } catch (err) {
//       console.log('Error creating post:', err);
//       return res.redirect('back');
//     }
//   };