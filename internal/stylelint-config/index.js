const nameRegExpString = '[a-z0-9]+(-[a-z0-9]+)*'

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  overrides: [
    {
      files: ['*.(scss|css|vue|html)', '**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['*.(html|vue)', '**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['at-root', 'mixin', 'include', 'extend']
      }
    ],
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentName: `^${nameRegExpString}$`,
      componentSelectors: {
        initial: `^\\.{componentName}(?:__${nameRegExpString})?(?:--${nameRegExpString})?$`,
        combined: `^\\.{componentName}(((?:__${nameRegExpString})(?:--${nameRegExpString})?)|(?:--${nameRegExpString}))$`
      },
      utilitySelectors: '^\\.u-[a-zA-z]+$'
    },
    'selector-class-pattern': null,
    'value-keyword-case': null
  },
  cache: true
}
