module.exports = {
  publicPath: process.env.NODE_ENV === 'staging'
    ? `/covid-stats/${process.env.CI_PROJECT_NAME}/`
    : '/',
}
