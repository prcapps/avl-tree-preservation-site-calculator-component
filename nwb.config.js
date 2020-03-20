module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'TreePreservationSiteCalculator',
      externals: {
        react: 'React'
      }
    }
  }
}
