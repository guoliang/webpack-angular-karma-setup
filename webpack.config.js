var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
    "context": path.join(__dirname, "/src"),

    "entry": {
        "app": ["./app.ts"],
        "vendors": ["angular"]
    },
    "output": {
        "path": "./dist/scripts",
        "filename": "[name].bundle.js"
    },
    "devtool": "source-maps",
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
        )]
}
