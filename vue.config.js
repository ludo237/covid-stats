module.exports = {
  publicPath: process.env.NODE_ENV === 'staging'
    ? `/${process.env.CI_PROJECT_NAME}/`
    : '/',
}
