import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default [
  { files: [ '**/*.{js,mjs,cjs,jsx}' ] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactConfig,

  {
    rules: {

      // General

      'no-unused-vars': [ 'off', {
        'vars': 'all',
        'args': 'after-used',
        'caughtErrors': 'all',
        'ignoreRestSiblings': false,
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      } ],

      'no-restricted-imports': [ 'error', {
        'paths': [ {
          'name': 'import-foo',
          'importNames': [ 'Bar' ],
          'message': 'Please use Bar from /import-bar/baz/ instead.'
        } ]
      } ],

      'no-undef': 'warn',
      'linebreak-style': [ 'warn', 'windows' ],

      // Semicolons

      'no-extra-semi': 'warn',
      semi: [ 'warn', 'never' ],

      // Quotes

      quotes: [ 'warn', 'single' ],

      // Indentation

      indent: [ 'error', 2 ],
      'indent-legacy': [ 'warn', 2 ],

      // Spacing

      'space-before-function-paren': [ 'warn', 'always' ],
      'space-before-blocks': [ 'warn', 'always' ],
      'space-in-parens': [ 'warn', 'never' ],
      'keyword-spacing': [ 'warn', { before: true, after: true } ],
      'object-curly-spacing': [ 'warn', 'always' ],
      'array-bracket-spacing': [ 'warn', 'always' ],
      'template-tag-spacing': [ 'warn', 'never' ],
      'no-mixed-spaces-and-tabs': [ 'warn', 'smart-tabs' ],
      'no-multiple-empty-lines': [ 'warn', { max: 1, maxEOF: 0 } ],
      'block-spacing': 'warn',
      'key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ],
      'no-trailing-spaces': [ 'error', { 'skipBlankLines': false, 'ignoreComments': false } ],
      'no-multi-spaces': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'no-unused-expressions': [
        'warn', {
          'enforceForJSX': false,
          'allowTernary': true,
          'allowShortCircuit': true,
          'allowTaggedTemplates': true
        }
      ],

      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-children-prop': 'off',
      'react/no-unknown-property': 'off',
      'react/no-adjacent-inline-elements': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-no-undef': 'off',
      'react/jsx-key': 'off',

      'no-explicit-any': 'off',

    }
  }
]