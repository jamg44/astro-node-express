var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="/stylesheets/style.css">
    </head>
    <body>
      <img src="/images/icon2.svg" width="100"></image>
      <h1>Express index</h1>
      <a href="/astro-index">Go to Astro index page</a><br/>
    </body>
  </html>
  `);
});

module.exports = router;
