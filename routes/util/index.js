const articles = require('../../data/articles');
const fs = require('fs');
const path = require('path');

const enhance = (article) => {
  article.url = article.title.replace(/\s/g, '-').toLowerCase();
  article.color = typeColors[article.type];
  const coverImageUrl = `/article/${article.url}/img/cover.jpg`;

  article.coverImageUrl = fs.existsSync(path.resolve(`./data/articles/${article.id}/img/cover.jpg`)) ? coverImageUrl : '/img/default-cover.jpg';
  return article;
};

const titleToUrl = (title) => title.replace(/\s/g, '-').toLowerCase();

const typeColors = {
  Article: '#0078ff',
  'Tips & Tricks': '#ff8700',
  Tutorial: '#8d00ff',
  Answer: '#4bb92f',
};

module.exports = {
  enhance,
  getArticleByUrl: (url) => {
    const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

    const incomingArticleUrl = url.substring(url.indexOf('article/') + 8, nextIndex);

    const currentArticle = articles.find(({ title }) => titleToUrl(title) == incomingArticleUrl);

    enhance(currentArticle);

    return currentArticle;
  },
  mapBlockToHtml: ({ type, innerText, url, className, alt }, articleUrl) => {
    const hrefOrSrc = url ? (type == 'a' ? `href="${url}"` : `src="/article/${articleUrl}/img/${url}"`) : '';

    return `<${type} 
                ${hrefOrSrc}
                ${className ? 'class' + `="${className}"` : ''}
                ${alt ? 'alt' + `="${alt}"` : ''}
            >
                ${innerText || ''}
            </${type}>`;
  },
};
