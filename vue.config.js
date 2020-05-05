module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/nazmul-portfolio/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'us',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
