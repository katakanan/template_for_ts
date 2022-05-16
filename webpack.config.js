const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devServer: {
        static: {
            directory: distPath
        },
        watchFiles: ["src/*"],
        open: true
    },

    entry: './src/main.ts',
    devtool: "source-map",
    output: {
        path: distPath,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    }
                ]
            }
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