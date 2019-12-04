const express = require('express');
const router = express.Router();
const ctrlUserWeather= require('../controllers/userweather');
const ctrlAccount = require('../controllers/account');
const ctrlOther = require('../controllers/other');



/*Account Pages*/
router.get('/login',ctrlAccount.login );
router.get('/',ctrlAccount.login );

router.get('/signup',ctrlAccount.signup)
router.post('/signup',ctrlAccount.userSignUp)


router.get('/about',ctrlOther.About );

/* User Weather pages */
router.get('/locations/new', ctrlUserWeather.newlocation);
router.get('/:userid',ctrlUserWeather.userhome );

module.exports = router;
