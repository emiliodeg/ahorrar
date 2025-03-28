// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ahorrar',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ahorrar',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['']
        }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'multi', 'consistent'],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'static-field',
            'instance-field',
            'public-instance-method',
            'public-static-field'
          ]
        }
      ],
      'no-console': 'error',
      'prefer-const': 'error'
    }
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': 'error'
    }
  }
);
