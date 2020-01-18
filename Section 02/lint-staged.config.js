// eslint-disable-next-line no-undef
module.exports = {
  '*.+(js|ts|tsx)': ['eslint'],
  '**/*.+(js|jsx|json|ts|tsx)': ['prettier --write', 'git add'],
}
