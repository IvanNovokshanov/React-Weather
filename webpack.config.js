const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const miniCss = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({
	path: path.join(__dirname, '.env')
});

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		clean: true,
		publicPath: '/'
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './public'),
		compress: true,
		hot: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /.(s*)css$/,
				use: [miniCss.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.tsx', '.ts', '.css', '.json'],
		alias: {
			assets: path.resolve(__dirname, './public')
		}
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new HTMLWebpackPlugin({
			title: 'Home-build',
			favicon: path.resolve(__dirname, './public/images/favicon.ico'),
			template: path.resolve(__dirname, './public/index.html'),
			filename: 'index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './dist'),
					to: 'assets',
					globOptions: {
						ignore: ['*.DS_Store']
					},
					noErrorOnMissing: true
				}
			]
		}),
		new webpack.DefinePlugin({
			'process.env': dotenv.parsed
		})
	]
};
