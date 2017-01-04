module.exports = {
    devtool: 'inline-sourcemap',
    entry: './example.jsx',
    output: {
        path: './',
        filename: 'example.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                }
            }
        ]
    }
 };