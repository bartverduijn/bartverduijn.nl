/* eslint no-new: 0, global-require: 0 */

const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
    }
}

module.exports = {
    mode: 'development',
    entry: './scripts/importTailwind.js',
    output: {
        path: path.resolve(__dirname, 'styles'),
        filename: 'styles.css',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1, minimize: true },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('tailwindcss')(
                                        './styles/tailwind.js'
                                    ),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            watch: true,
            server: true,
        }),
        new PurgecssPlugin({
            paths: glob.sync(path.join(__dirname, '*.html')),
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'js'],
                },
            ],
        }),
    ],
};
