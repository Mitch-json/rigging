var express = require('express');
const User = require('../Models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/auth', function(req, res, next) {
  res.render('auth');
});

router.post('/',async function(req, res, next) {
  console.log(req.body)
  const newUser = new User({ regNo: req.body.username, password: req.body.password});
  
  try {
    await newUser.save()
    console.log('User Created');
    res.redirect('https://www.uonbi.ac.ke');
  } catch (error) {
    console.log(error)
    res.redirect('/');
  }
});

module.exports = router;
