/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_API_URL: string;
		// Добавьте здесь другие переменные окружения, которые вы используете
	}
}
