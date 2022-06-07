const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', listingsCtrl.create);
router.get('/', listingsCtrl.getAll);
router.get('/', listingsCtrl.deleteListing);


module.exports = router;