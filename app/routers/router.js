let express = require('express');
let router = express.Router();
 
const corona = require('../controllers/controller');

router.get('/api/corona/all', corona.retrieveAllData);
router.get('/api/corona/pagination', corona.pagination);
router.get('/api/corona/list-countries', corona.pagination);
router.get('/api/corona/countries-by-region', corona.pagination);
module.exports = router;