const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    watch: true,
    devServer: {
        static: './dist',
    },
});
