const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

mudule.exports = {
    mode: "development",
    entry: {
        main: "./main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },

    plugin: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],

    module: {
        rules: [
            {
                "test": /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    optimization: {
        
    }
}