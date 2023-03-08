module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	sourceMaps: false,
	env: {
		production: {
			plugins: ['@babel/plugin-syntax-dynamic-import'],
		},
	},
};
