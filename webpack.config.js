module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	// mode: 'development',
	// entry: './src/index.js',
	// output: {
	// 	filename: 'index.html',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
};
