const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public'
	},
	plugins: [
		new CopyPlugin([
			{ from: 'public', to: '.' },
		]),
	],
}
