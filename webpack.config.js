const path = require('path')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

var PORT = 8081;

const isProduction = process.env.NODE_ENV === 'production'

var extractPlugin = new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true,
    disable: !isProduction,
})

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:' + PORT,
        './src/index.js',
        './src/global.scss'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        modules: ['src', 'ducks', 'components', 'organisms', 'molecules', 'styles', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.test\.jsx?$).*\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {loader: path.join(__dirname, 'loaders', 'jsx-import-sass-loader')}
                ],
            },
            {
                test: path.join(__dirname, 'src', 'global.scss'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true, }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                // includePaths: path.join(__dirname, 'frontend', 'src', 'index.scss')
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(scss)$/,
                exclude: path.join(__dirname, 'src', 'global.scss'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true, }
                        },
                        {
                            loader: 'css-encapsulation-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(css)$/,
                include: path.join(__dirname, 'node_modules'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true, }
                        }
                    ]
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
        ],
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        extractPlugin,
        new Dotenv({
            path: isProduction ? './.env' : './.env.dev'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        port: PORT,
        historyApiFallback: true,
        hot: true,
    },
}