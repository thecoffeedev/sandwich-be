var express = require('express');
const { createUser, userLogin } = require('../controllers/users.controller');
var router = express.Router();


router.post('/register', async (req, res, next) => {
  try {
    if (req.body.username && req.body.password && req.body.type ){
      const user = await createUser(req.body.username, req.body.password, req.body.type)
      res.status(200).send({status: 'success', message: 'user created successfully.', data: user})
    }else{
      res.status(200).send({status: 'failure', message: 'Please provide required fields.'})
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/login/:username/:password', async(req, res, next) => {
  try {
    if (req.params.username && req.params.password ){
      const authenticated = await userLogin(req.params.username, req.params.password)
      if (authenticated){
        res.status(200).send({status: 'success', message: 'user login successfully.'})
        
      }else{
        res.status(401).send({status: 'failure', message: 'user login unsuccessful. username or password is incorrect'})

      }
    }else{
      res.status(400).send({status: 'failure', message: 'Please provide required fields.'})
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
});

module.exports = router;
