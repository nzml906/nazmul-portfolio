module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nz-portfolio/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'us',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
