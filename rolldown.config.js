import { defineConfig } from 'rolldown';

export default defineConfig({
	input: ['src/index.ts'],
	output: { file: 'build/main.js' },
	transform: { typescript: {} },
});
