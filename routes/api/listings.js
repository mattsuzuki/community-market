const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, listingsCtrl.create);
router.get('/', listingsCtrl.getAll);
router.delete('/:id', ensureLoggedIn, listingsCtrl.delete);


module.exports = router;