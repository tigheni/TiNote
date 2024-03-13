const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            scriptLoading: "defer",
        }),
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
    },
};
