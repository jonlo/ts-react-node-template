import dotenv from 'dotenv';

export function loadEnvironment() {
	const environment = process.env.NODE_ENV || 'development';

	// Load environment variables from the corresponding .env file
	const result = dotenv.config({
		path: `./.env.${environment}`,
	});
	if (result.error) {
		console.error(result.error);
		process.exit(1);
	}

}
