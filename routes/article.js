const express = require('express');
const router = express.Router();
const path = require('path');
const articles = require('../data/articles');

/* GET users listing. */
router.get('/*', (req, res, next) => {
  // res.send(requestedArticleUrl);
  console.log('__dirname', __dirname);

  const article = getArticleByUrl(req.originalUrl);

  if (article) {
    if (req.originalUrl.includes('/img')) {
      const requestedImageName = req.originalUrl.substring(req.originalUrl.lastIndexOf('/'));

      res.sendFile(path.resolve(`./data/articles/${article.id}/img${requestedImageName}`));
    } else {
      res.render('article', { article, mapBlockToHtml });
    }
  } else {
    return res.redirect('/');
  }
});

const getArticleByUrl = (url) => {
  const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

  const incomingArticleUrl = url.substring(url.indexOf('article/') + 8, nextIndex);

  console.log(' * * *incomingArticleUrl', incomingArticleUrl);

  const currentArticle = articles.find(({ title }) => titleToUrl(title) == incomingArticleUrl);

  currentArticle.url = titleToUrl(currentArticle.title);

  return currentArticle;
};

const mapBlockToHtml = ({ type, innerText, url, className, alt }, articleUrl) => {
  const hrefOrSrc = url ? (type == 'a' ? `href="${url}"` : `src="/article/${articleUrl}/img/${url}"`) : '';

  return `<${type} 
              ${hrefOrSrc}
              ${className ? 'class' + `="${className}"` : ''}
              ${alt ? 'alt' + `="${alt}"` : ''}
          >
              ${innerText || ''}
          </${type}>`;
};

const titleToUrl = (title) => title.replace(/\s/g, '-').toLowerCase();

module.exports = router;
