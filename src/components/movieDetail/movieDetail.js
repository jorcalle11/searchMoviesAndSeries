(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('movieDetail',{
      template: template(),
      controller: ['MoviesService',controller]
    })

    function template() {
      return `
        <section class="container">
          <h1 class="center">Detalles</h1>
          <ul class="collection with-header">
            <li class="collection-header"><h4>{{$ctrl.movie.Title}}</h4></li>
            <li class="collection-item">{{$ctrl.movie.Genre}}<li>
            <li class="collection-item">{{$ctrl.movie.Actors}}<li>
            <li class="collection-item">{{$ctrl.movie.Plot}}<li>
          </ul>
        </section>
      `
    }

    function controller(MoviesService) {
      var vm = this;
      vm.movie = {}
      vm.$routerOnActivate = $routerOnActivate;

      function $routerOnActivate(next,previous) {
        MoviesService.getById(next.params.id)
          .then((movie) => {
            vm.movie = movie;
          })
      }
    }
}());
