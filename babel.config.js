module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      loose: true
    }],
    '@babel/preset-react'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    'react-css-modules',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from'
  ]
};