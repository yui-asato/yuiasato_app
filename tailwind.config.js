module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]

  theme: {
    extend: {},
    fontFamily: {
      body: [
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'MS Ｐゴシック',
        'MS PGothic',
        'sans-serif',
        'YuGothic',
        'Yu Gothic',
        'monospace',
        'fantasy',
        'Comic Sans MS',
        'Impact'
      ],
    }
  }

  fontFamily: {
    banana: ['MS Ｐゴシック','MS PGothic','sans-serif'],
    ringo : ['Hiragino Sans','ヒラギノ角ゴシック','メイリオ','Meiryo'],
    momo : ['monospace'],
  }
}

