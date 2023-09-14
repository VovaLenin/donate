const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = MiniCssExtractPlugin.loader

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    entry: `${__dirname}/index.js`,
    devServer: {
        static: `${__dirname}/dist`,
        open: true,
        compress: true,
        port: 8000,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
        ],
    },
});