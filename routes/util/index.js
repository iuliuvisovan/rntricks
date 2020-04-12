const articles = require('../../data/articles');

const addTitleAndColorTo = (article) => {
  article.url = article.title.replace(/\s/g, '-').toLowerCase();
  article.color = typeColors[article.type];
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
  addTitleAndColorTo: addTitleAndColorTo,
  getArticleByUrl: (url) => {
    const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

    const incomingArticleUrl = url.substring(url.indexOf('article/') + 8, nextIndex);

    const currentArticle = articles.find(({ title }) => titleToUrl(title) == incomingArticleUrl);

    addTitleAndColorTo(currentArticle);

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
