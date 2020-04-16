const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');
const { getArticleByUrl, mapBlockToHtml } = require('./util');

router.get('/*', (req, res, next) => {
  console.log('req.url', req.url);
  console.log('req.originalUrl', req.originalUrl);

  const article = getArticleByUrl(req.originalUrl);

  if (article) {
    if (req.originalUrl.includes('/img')) {
      const requestedImageName = req.originalUrl.substring(req.originalUrl.lastIndexOf('/'));
      const resolvedFilePath = path.resolve(`./data/articles/${article.id}/img${requestedImageName}`);

      res.sendFile(resolvedFilePath);
    } else {
      res.render('article', { article: article, mapBlockToHtml, moment });
    }
  } else {
    return res.redirect('/');
  }
});

module.exports = router;
