(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('showMovies',{
      template: template(),
      controller: ['MoviesService',controller],
      bindings: {
        movies: '<',
        total : '<'
      }
    })

    function template() {
      return `
        <div ng-if="!$ctrl.movies.length" class="center">
          <h5>Sin resultados, comienza a buscar!!!</h5>
        </div>
        <section class="row" ng-if="$ctrl.movies.length" infinite-scroll='$ctrl.loadMore()'>
          <div class="col s12 m4" ng-repeat="movie in $ctrl.movies">
            <a ng-link="['Detail',{id:movie.imdbID}]">
            <article class="card small" >
              <header class="card-image">
                <img ng-src="{{movie.Poster}}">
                <span class="card-title">{{movie.Title}}</span>
              </header>
              <main class="card-content">
                <p>{{movie.Type}}</p>
              </main>
            </article>
            </a>
          </div>
        </section>

      `
    }

    function controller(MoviesService) {
      var vm = this;
      vm.page = 2;
      vm.loadMore = loadMore;
      vm.$onChanges = $onChanges;

      function $onChanges() {
        if(vm.total>0){
          vm.cantPages = vm.total / 10;
        }
      }

      function loadMore() {
        if (vm.page <= vm.cantPages) {
          MoviesService.scroll(vm.page)
          .then((data) => {
            vm.page+=1;
            data.Search.map((movie)=>{
              vm.movies.push(movie);
            });
          })
        }
      }

    }
}());
