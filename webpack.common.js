const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/client'),
    entry: {
        app: './index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                        loader: 'babel-loader',
                        options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            'css-modules-transform',
                        ]
                    }
                }
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                    { loader: 'stylus-loader'},
                ],
            },
        ],
    },
};