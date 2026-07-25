module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{json,html,js,css,woff2,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};