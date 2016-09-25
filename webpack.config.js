var CopyWebpackPlugin = require("copy-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let path = require("path");
let webpack = require("webpack");

let config = {
    context: path.join(__dirname, "/src"),

    entry: {
        app: ["./app.ts", "./app.less"],
        vendors: ["angular"]
    },
    output: {
        path: path.join(__dirname, "./dist/scripts"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap!less-loader?source-Map"),
                exclude: "/node_modules/"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "**/*",
                to: "../"
            }
        ],
            {
                ignore: ["*.ts", "*.less"]
            }
        ),
        new ExtractTextPlugin(
            "../dist/[name].bundle.css",
            { allChunks: true }
        ),
        new webpack.DefinePlugin({
            process_env: {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }
    )]
};

if (process.env.NODE_ENV !== "production") {
    config.devtool = "source-map"
}

module.exports = config;
