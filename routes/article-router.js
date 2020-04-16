const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');
const { getArticleByUrl, mapBlockToHtml } = require('./util');

router.get('/*', (req, res, next) => {
  const requestedUrl = req.baseUrl + req.path;

  const article = getArticleByUrl(requestedUrl);

  if (article) {
    if (requestedUrl.includes('/img')) {
      const requestedImageName = requestedUrl.substring(requestedUrl.lastIndexOf('/'));
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
