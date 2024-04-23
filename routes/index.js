const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res) {
  const { message, user } = req.body;
  messages.push({text: message, user: user, added: new Date()});
  res.redirect('/');
})

module.exports = router;
