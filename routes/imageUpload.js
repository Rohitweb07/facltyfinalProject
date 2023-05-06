const express=require('express');
const router=express.Router();
const passport=require('passport');
const image_controller=require('../controllers/image_controller');
const userController=require('../controllers/user_conroller');

     router.post('/upload',passport.checkAuthentication,image_controller.upload);
    router.get('/uploadProfilePicture',passport.checkAuthentication,image_controller.uploadProfilePicture);
    // router.get('/thesisSuperInfoShow/:email',thesisSuperInfoInputController.thesisSuperInfoShow);
    // //    router.get('/responsiInfoShow',responsiInfoController.responsiInfoShow);
    
    //   router.get('/destroy/:id', passport.checkAuthentication, thesisSuperInfoInputController.destroy);
 

module.exports=router;