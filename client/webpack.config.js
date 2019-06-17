let path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '../server/public/scripts'),
    filename: 'app.js'
  },
  watch: true
};