import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [js.configs.all, tseslint.configs.strictTypeChecked],
		languageOptions: { parserOptions: { projectService: true } },
		rules: {
			'no-magic-numbers': 'off',
			'no-console': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'max-params': 'off',
			'class-methods-use-this': 'off',
			'max-lines-per-function': 'off',
			'max-statements': 'off',
			'sort-imports': 'off',
			'sort-keys': 'off',
			'sort-vars': 'off',
			'guard-for-in': 'off',
			'one-var': 'off',
			'no-case-declarations': 'off',
		},
	},
]);
