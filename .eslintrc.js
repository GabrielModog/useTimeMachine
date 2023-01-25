module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react'],
	ignorePatterns: ['/build/**/*.js'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'warn',
	},
};
