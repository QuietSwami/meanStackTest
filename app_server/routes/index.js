var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocation.homelist); //creates new index.html
router.get('/location', ctrlLocation.locationsInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/*Other Page*/
router.get('/about', ctrlOthers.about);
module.exports = router;
