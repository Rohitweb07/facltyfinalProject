const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);

router.use('/users',require('./users'));
router.use('/basicInfo',require('./basicInfo'));
router.use('/facultycard',require('./facultycard'));
router.use('/responsiInfo',require('./responsiInfo'));
router.use('/academicInfo',require('./academicInfo'));
router.use('/thesisSuper',require('./thesisSuper'));
router.use('/imageUpload',require('./imageUpload'));
console.log(`router is loaded`);

module.exports=router;