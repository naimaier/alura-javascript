const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

// NodeJS syntax
module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/componentes/lista/listagem-cliente.js",
    output: {
        //adicionado para resolver um erro "Error: Automatic publicPath is not supported in this browser"
        publicPath: '',
        filename: "main.js",
        //cria o diretorio dist no caminho atual
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",
            filename: "index.html" //arquivo a ser gerado no dist
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //regex para pegar os arquivos css
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    }
}