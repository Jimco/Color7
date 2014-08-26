seajs.config({
  // Enable plugins
  plugins: ['shim'],

  // Configure alias
  alias: {
    'jquery': {
      src: 'http://res.xiejiancong.com/js/jquery-1.7.2.min.js',
      exports: 'jQuery'
    },
    'jquery.dialog': {
      src: 'artDialog.plugins.min.js',
      deps: ['jquery', 'jquery.artDialog.min.js'],
      exports: 'jquery.dialog'
    }
  }
});