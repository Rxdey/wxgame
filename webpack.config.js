const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const html = require('html-withimg-loader!./index.html');
module.exports = {
    devtool: "eval-source-map", //生产阶段关闭这个选项
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/common.js"
    },
    devServer: {
        // host: '0.0.0.0',
        port: 8080,
        contentBase: './dist',
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        // hot:true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //自动清理
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            // template: __dirname+"/index.html",
            inject: 'body', //script位置
            hash: false, //每次生成不同哈希值
            chunks: ['app']
        }),
        new webpack.optimize.OccurrenceOrderPlugin(), //分配id
        new webpack.optimize.UglifyJsPlugin(), //压缩
        // new ExtractTextPlugin("./css/style.css")//分离
        new ExtractTextPlugin("style.css") //分离
        // new HtmlWebpackPlugin.HotModuleReplacementPlugin()//热加载插件

    ],
    module: {
        rules: [
             {
                test: /\.jsx$|\.js$/,
                use:{
                    loader: 'eslint-loader',
                },
                enforce: "pre",
                exclude: /bundle\.js$/,
                include: `${__dirname}/src`,
             },
             {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
             },{
                test: /\.css$/,
                // use:[
                //     'style-loader',
                //     { loader: 'css-loader', options: { importLoaders: 1 } },
                // ]
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true // css压缩
                        }
                    }],

                })
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true
                        }
                    },
                    'less-loader'
                ]
            },
            {  
                test: /\.jpeg$/,  
                use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/',  
            }, 
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                // loader: 'file-loader?name=img/[name].[ext]'
                use:'file-loader?limit=1024&name=img/[name].[ext]'
            }
        ]
    }
}