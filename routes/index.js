const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');

router.get('/', (req, res, next) => {
  articles.forEach((x) => {
    x.url = titleToUrl(x.title);
    x.color = typeColors[x.type];
  });

  res.render('index', { articles, moment });
});

const titleToUrl = (title) => title.replace(/\s/g, '-').toLowerCase();
const typeToColor = (type) => title.replace(/\s/g, '-').toLowerCase();

const typeColors = {
  Article: '#0078ff',
  'Tips & Tricks': '#ff8700',
  Tutorial: '#8d00ff',
  Answer: '#4bb92f',
};

module.exports = router;
