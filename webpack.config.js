// const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './styles/styles.styl',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    browsers: 'last 3 versions',
                                }),
                            ],
                        },
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            includePaths: ['styles']
                                .map(dir => path.join(__dirname, dir))
                                .map(dir => glob.sync(dir))
                                .reduce(
                                    (array, filepath) => array.concat(filepath),
                                    []
                                ),
                        },
                    },
                ]),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({ filename: './styles/[name].css' }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
        }),
        new CopyWebpackPlugin([
            {
                from: 'index.html',
                to: '../dist',
            },
        ]),
    ],
};
