(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('moviesRoot',{
      template: template(),
      $routeConfig: [
        {path:'/home', component: 'home', name:'Home'},
        {path:'/home/:id', component: 'movieDetail', name:'Detail'},
        {path: '/**', redirectTo: ['Home']}
      ]
    })

  function template() {
    return `
      <header-movies></header-movies>
      <main>
        <ng-outlet></ng-outlet>
      <main>
    `
  }


}());
