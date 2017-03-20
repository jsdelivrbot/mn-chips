import browserSync from 'browser-sync'

module.exports = {
  templates: {
    src: [
      './sources/templates/demo.jade',
      './sources/templates/index.jade',
    ],
    dest: './docs/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'mn-chips.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.po.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'mn-chips.js',
  },
  lintScripts: [
    './gulpfile.babe..js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
}
