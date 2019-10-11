const express = require('express');
const router = express.Router();
const ctrlUserWeather= require('../controllers/userweather');
const ctrlAccount = require('../controllers/account');

/* User Weather pages */
router.get('/location', ctrlUserWeather.locationInfo);
router.get('/location/review/new', ctrlUserWeather.addReview);

/*Account Pages*/
router.get('/',ctrlAccount.login );



module.exports = router;
