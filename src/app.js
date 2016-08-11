(function() {
  'use strict';

  angular
    .module('moviesApp',[
      'ngComponentRouter',
      'infinite-scroll'
    ])
    .constant('Api',`http://www.omdbapi.com/?`)
    .value('$routerRootComponent','moviesRoot')
}());
