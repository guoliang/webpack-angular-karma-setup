
var APP = __dirname + "/src";

module.exports = {
    "entry": {
        "app": [APP + "/main.ts"],
        "vendors": ["angular"]
    },
    "output": {
        "path": APP + "/scripts",
        "filename": "[name].bundle.js"
    },
    "resolve": {
        "extensions": ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    "module": {
        "loaders": [
            {
                "test": /\.ts$/,
                "loader": "ts-loader",
                "exclude": "/node_modules/"
            }
        ]
    }
}