module.exports = {
	apps: [
		{
			name: 'Example',
			script: './dist/index.js',
			env: {
				"PORT": 8000,
				"NODE_ENV": "development"
			},
			env_production: {
				"PORT": 80,
				"NODE_ENV": "production",
			}
		},
	],
};