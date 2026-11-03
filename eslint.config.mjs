import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig({
  files: ['**/*.{js,ts}'],
  extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
  ignores: ['dist', 'node_modules', 'eslint.config.mjs', 'jest.config.js'],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfifRootDir: import.meta.dirname,
    },
  },
  rules: {
    'no-console': 'error', //warn off
    'dot-notation': 'error',
  },
})
