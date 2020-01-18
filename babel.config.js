module.exports = {
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
