module.exports = {
	apps: [
		{
			name: 'Example',
			script: './dist/index.js',
			args: "start",
			env: {
				"PORT": 8000,
				"NODE_ENV": "production"
			},
		},
	],
};