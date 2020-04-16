const articles = require('../../data/articles');

module.exports = {
  getArticleByUrl: (url) => {
    const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

    const incomingArticleUrl = url.substring(0, nextIndex);

    const currentArticle = articles.find(({ url }) => url == incomingArticleUrl);

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
