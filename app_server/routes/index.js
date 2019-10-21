const express = require('express');
const router = express.Router();
const ctrlUserWeather= require('../controllers/userweather');
const ctrlAccount = require('../controllers/account');

/* User Weather pages */
router.get('/',ctrlUserWeather.userhome );
router.get('/locations/new', ctrlUserWeather.newlocation);

/*Account Pages*/
router.get('/login',ctrlAccount.login );
router.get('/signup',ctrlAccount.signup );


module.exports = router;
