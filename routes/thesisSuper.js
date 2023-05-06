const express=require('express');
const router=express.Router();
const passport=require('passport');
const thesisSuperInfoInputController=require('../controllers/thesisSuper_controller');
const userController=require('../controllers/user_conroller');

    router.post('/create',passport.checkAuthentication,thesisSuperInfoInputController.create);
    router.get('/thesisSuperInfoInput',passport.checkAuthentication,thesisSuperInfoInputController.thesisSuperInfoInput);
    router.get('/thesisSuperInfoShow/:email',thesisSuperInfoInputController.thesisSuperInfoShow);
    //    router.get('/responsiInfoShow',responsiInfoController.responsiInfoShow);
    
      router.get('/destroy/:id', passport.checkAuthentication, thesisSuperInfoInputController.destroy);
      router.post('/updates/:id',passport.checkAuthentication,thesisSuperInfoInputController.updates);
      router.get('/edits/:email', passport.checkAuthentication, thesisSuperInfoInputController.editshow);     

module.exports=router;