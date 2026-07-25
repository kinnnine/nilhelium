module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{json,html,js,css,woff2,svg,map}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};