import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import sheriff from '@softarc/eslint-plugin-sheriff';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import angular from 'angular-eslint';
import html from 'eslint-plugin-html';

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      sheriff.configs.all
    ],
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['app', 'lib', 'mfe2'],
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'lib', 'mfe2'],
          style: 'kebab-case'
        }
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-alert': 'warn'
    }
  },
  {
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    files: ['**/*.html'],
    plugins: { html },
    rules: {}
  },
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': [
        'warn',
        {
          printWidth: 120,
          semi: true,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  },
  {
    ignores: ['dist/**', '.angular/**', '.vscode/**', 'node_modules/**']
  }
);
