const path = require('path');

module.exports = {
    entry: ['core-js', '@babel/polyfill', path.resolve('./example/js/default.js')],
    mode: 'development',
    output: {
        filename: 'build.js',
        path: path.resolve('./example/js')
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
