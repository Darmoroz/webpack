const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		// mode: 'development',
		// entry: './src/index.js',
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		// filename: 'main.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'webpack-template',
			// filename: 'index.html',
		}),
	],
};
