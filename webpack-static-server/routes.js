const path = require('path');

const routes = (app) => {
  app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'ejs');

  app.get('/driver', (req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.render('driver');
  });
  app.get('/', (req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.render('selection');
  });

  app.use((req, res, next) => {
    console.log(`url: ${req.url}`);

    const regExp = new RegExp('^.*.(js$|svg$)'); // если запрос файлов, пердать управление следующему middleware(static)
    if (req.url.search(regExp) !== -1) {
      next();
      return;
    }

    res.statusCode = 404;
    res.render('bad-request');
  });

  // app.get(new RegExp(`
  //   ^(?!/selection.js
  //     |/driver.js
  //     |/login-driver.js
  //     |/registration-driver.js
  //     |/common-driver.js
  //     |/bad-hash.js
  //     |/images/driver.svg
  //     |/images/eye-show.svg
  //     |/images/eye-hide.svg
  //     |/favicon.ico).*
  //   `), (req, res) => { // любая строка кроме
  //   res.statusCode = 404;
  //   console.log(req.url);
  //   res.render('bad-request');
  // });
};

module.exports = routes;
