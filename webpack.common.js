const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: { 
                            insert: 'head',
                            injectType: 'singletonStyleTag'
                        },
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ],
            },
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/template.html'
    }),
    new CopyWebpackPlugin([
        {
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'dist/img')
    },
    ]),
    new CopyWebpackPlugin([
        {
        from: path.resolve(__dirname, 'dist/'),
        to: path.resolve(__dirname, 'docs/')
    }
    ])
  ]
}