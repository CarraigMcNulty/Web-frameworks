
const express = require('express');
const router = express.Router();
const ctrlUserWeather= require('../controller/userweather');
const ctrlAccount = require('../controller/account');

router
  .route('/:userid')
  .get(ctrlAccount.usersReadOne);
  
router
    .route('/:userid/locations/new')
    .get(ctrlUserWeather.locationsReadOne)
    .post(ctrlUserWeather.locationsCreate);
    
router
    .route('/user')
    .post(ctrlAccount.newUser);
  
 

router
   .route('/signup')
   //.get(ctrlAccount.usersReadOne)
   .post(ctrlAccount.newUser);



    
 module.exports = router;
