const express = require('express');
const singleHotelHandler = require('../controllers/singleHotelController');
const router = express.Router();



//localhost:3500/api/hotels/id

router.route("/:id")
    .get(singleHotelHandler);

module.exports = router;