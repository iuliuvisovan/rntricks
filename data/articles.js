module.exports = [...new Array(5)].map((x, i) => ({
  id: i + 1,
  ...require(`./articles/${i + 1}/data.js`),
}));
