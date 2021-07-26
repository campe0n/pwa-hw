const config = {
    entry: "./public/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/present-env"]
                }
            }
        }]
    }
};

module.exports = config;