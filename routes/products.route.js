var express = require('express');
var router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post('/create', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post('/pending', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post('/picked', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post('/picked/update', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.delete('/delete', async(req, res, next) => {
  try {
  
  } catch (error) {
    console.log(error)
    next(error)
  }
});

module.exports = router;
