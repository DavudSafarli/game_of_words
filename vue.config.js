module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/game_of_words/'
      : '/'
  }