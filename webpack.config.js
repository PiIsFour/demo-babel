const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
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
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									"targets": {
										"firefox": "56",
										"chrome": "62",
										"edge": "16",
										"ie": "11"
									},
									"useBuiltIns": "entry"
								}
							]
						]
					}
				}
			}
		]
	},
}
