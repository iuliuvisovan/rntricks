const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');

router.get('/', (req, res, next) => {
  articles.forEach((x) => {
    x.url = titleToUrl(x.title);
  });

  res.render('index', { articles, moment });
});

const titleToUrl = (title) => title.replace(/\s/g, '-').toLowerCase();

module.exports = router;
