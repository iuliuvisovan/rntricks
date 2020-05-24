const articles = require('../../data/articles');

module.exports = {
  getArticleByUrl: (url) => {
    const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

    const incomingArticleUrl = url.substring(0, nextIndex);

    const currentArticle = articles.find(({ url }) => url == incomingArticleUrl);

    return currentArticle;
  },
  mapBlockToHtml: ({ type, innerText, url, className, alt }, articleUrl, isAmp) => {
    `src="${articleUrl}/img/${url}"`;

    if (type == 'img') {
      if (!isAmp) {
        return `<picture>
        <source srcset="${articleUrl}/img/${url.replace('.jpg', '.webp')}" type="image/webp" />
        <source srcset="${articleUrl}/img/${url}" type="image/jpeg" />
        <img src="${articleUrl}/img/${url}" ${alt ? 'alt' + `="${alt}"` : ''} />
        </picture>
        `;
      } else {
        return `<div style="position: relative; width: 700px; height: 170px;"><amp-img class="contain" layout="fill" src="${articleUrl}/img/${url.replace('.jpg', '.webp')}" alt="${alt}"></amp-img></div>`;
      }
    }

    const hrefOrSrc = url ? `href="${url}"` : '';

    return `<${type} 
                ${hrefOrSrc}
                ${className ? 'class' + `="${className}"` : ''}
                ${alt ? 'alt' + `="${alt}"` : ''}
            >
                ${innerText || ''}
            </${type}>`;
  },
};
