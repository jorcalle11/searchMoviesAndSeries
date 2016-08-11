(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('searchMovie',{
      template: template(),
      controller: ['MoviesService',controller],
      bindings: {
        movies: '=',
        total: '='
      }
    })

  function template() {
    return `
      <form class="row" style="margin-top:10px">
        <div class="input-field col s12 m8 offset-m2">
          <input id="search" type="text" class="validate" ng-model="$ctrl.search" ng-change="$ctrl.searchMovie()">
          <label for="search">Pelicula</label>
        </div>
      </form>
    `
  }

  function controller(MoviesService) {
    var vm = this;
    vm.search = '';
    vm.found = false;
    vm.searchMovie = searchMovie;
    console.log(vm.total);
    function searchMovie() {
      MoviesService.setText(vm.search)
      MoviesService.search()
      .then((data) => {
        if (data.Response) {
          vm.total = data.totalResults;
          vm.found = true;
        } else {
          vm.found = false;
        }
        vm.movies = data.Search || [];
      })
    }
  }
}());
