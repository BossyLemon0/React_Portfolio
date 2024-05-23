module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js,jpeg}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};