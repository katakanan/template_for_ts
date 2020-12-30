const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devServer: {
        contentBase: distPath,
        open: true
    },

    entry: './src/main.ts',
    output: {
        path: distPath,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },

    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}