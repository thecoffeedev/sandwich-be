var express = require('express');
var router = express.Router();




router.post('/create', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/current', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/completed', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router;
