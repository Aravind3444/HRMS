/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...require('./index.js'),
  env: { ...require('./index.js').env, browser: true },
  rules: {
    ...require('./index.js').rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};

