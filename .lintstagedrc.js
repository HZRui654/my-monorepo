module.exports = {
  '*.{js,jsx}': ['prettier --write', 'eslint --ext .js,.jsx --fix'],
  '*.{ts,tsx}': ['prettier --write', 'eslint --ext .ts,.tsx --fix'],
  '*.vue': ['prettier --write', 'eslint --ext .vue --fix', 'stylelint --fix'],
  '*.{scss,html}': ['prettier --write', 'stylelint --fix'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write']
}
