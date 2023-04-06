let express = require('express');
let router = express.Router();

const mainController = require('../controller/mainController')

router.get('/',mainController.index);
  
router.get('/registro',mainController.register);

router.get('/login',mainController.login);

module.exports = router;
  
  