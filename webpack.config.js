var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

var config = {
    "context": path.join(__dirname, "/src"),

    "entry": {
        "app": ["./app.ts"],
        "vendors": ["angular"]
    },
    "output": {
        "path": path.join(__dirname, "./dist/scripts"),
        "filename": "[name].bundle.js"
    },
    "resolve": {
        "extensions": ['', '.ts', '.js']
    },
    "module": {
        "loaders": [
            {
                "test": /\.ts$/,
                "loader": "ts-loader",
                "exclude": "/node_modules/"
            }
        ]
    },
    "plugins": [
        new CopyWebpackPlugin([
            {
                from: "**/*",
                to: "../"
            }
        ],
            {
                ignore: ["*.ts"]
            }
        ),
        new webpack.DefinePlugin({
            "process_env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }
    )]
};

if (process.env.NODE_ENV !== "production") {
    config.devtool = "source-map"
}

module.exports = config;
