// eslint-disable-next-line no-undef
module.exports = {
  hooks: {
    'pre-commit': 'npm run check-types && lint-staged ¨&& npm run build',
  },
}
