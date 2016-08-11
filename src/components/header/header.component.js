(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('headerMovies',{
      template: template()
    })

  function template() {
    return `
    <nav>
      <div class="nav-wrapper grey darken-4">
        <a ng-link="['Home']" class="brand-logo center">Peliculas y Series</a>
      </div>
    </nav>
    `
  }

}());
