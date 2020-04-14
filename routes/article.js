const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');
const { enhance, getArticleByUrl, mapBlockToHtml } = require('./util');

router.get('/*', (req, res, next) => {
  const article = getArticleByUrl(req.originalUrl);

  if (article) {
    if (req.originalUrl.includes('/img')) {
      const requestedImageName = req.originalUrl.substring(req.originalUrl.lastIndexOf('/'));

      console.log('requestedImageName', requestedImageName);
      console.log('article.id', article.id);

      res.sendFile(path.resolve(`./data/articles/${article.id}/img${requestedImageName}`));
    } else {
      res.render('article', { article: enhance(article), mapBlockToHtml, moment });
    }
  } else {
    return res.redirect('/');
  }
});

module.exports = router;
