const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css'
});

module.exports = {
	context: path.join(process.cwd(), 'src'), //the home directory for webpack
	devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
	entry: {
		app: './index.js'
	},
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/',
		sourceMapFilename: '[name].map'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx'], // extensions that are used
		modules: [path.join(process.cwd(), 'src'), 'node_modules']
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: [
					[
						'env',
						{
							targets: {
								browsers: ['>1%', 'last 2 versions', 'not ie < 10'],
								uglify: true,
							},
							modules: false,
							useBuiltIns: false,
							debug: false,
						},
					],
					'react',
				],
				plugins: ['transform-decorators-legacy'],
				cacheDirectory: true,
			},
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				'css-loader?sourceMap',
			],
		},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
