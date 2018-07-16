const path = require('path');

const routes = (app) => {
  app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'ejs');

  app.get('/driver', (req, res) => {
    console.log(req.url);
    res.set('Cache-Control', 'no-cache');
    res.render('driver');
  });
  app.get('/', (req, res) => {
    console.log(req.url);
    res.set('Cache-Control', 'no-cache');
    res.render('selection');
  });

  app.get(new RegExp('^(?!/selection.js|/driver.js|/images/driver.svg|/favicon.ico).*'), (req, res) => { // любая строка кроме
    res.statusCode = 400;
    console.log(req.url);
    res.render('bad-request');
  });
};

module.exports = routes;
