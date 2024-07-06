module.exports = {
  extends: 'universe/native',
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.d.ts', '.json'],
      },
    },
  },
};
