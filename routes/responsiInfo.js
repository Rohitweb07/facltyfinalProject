const express=require('express');
const router=express.Router();
const passport=require('passport');
const responsiInfoController=require('../controllers/responsiInfo_controller');
const userController=require('../controllers/user_conroller');

    router.post('/create',passport.checkAuthentication,responsiInfoController.create);
    router.get('/responsiInfoInput',passport.checkAuthentication,responsiInfoController.responsiInfoInput);
     router.get('/responsiInfoShow/:email',responsiInfoController.responsiInfoShow);
       router.get('/responsiInfoShow',responsiInfoController.responsiInfoShow);
    
        router.get('/destroy/:id', passport.checkAuthentication, responsiInfoController.destroy);
 

module.exports=router;