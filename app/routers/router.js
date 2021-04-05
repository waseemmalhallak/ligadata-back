let express = require('express');
let router = express.Router();
 
const corona = require('../controllers/controller');

router.get('/api/corona/all', corona.retrieveAllCustomers);
router.get('/api/corona/pagination', corona.pagination);
module.exports = router;