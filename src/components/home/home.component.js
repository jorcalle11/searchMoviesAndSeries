(function() {
  'use strict';

  angular
    .module('moviesApp')
    .component('home',{
      template: template,
      controller: controller
    })

    function template() {
      return `
        <search-movie movies="$ctrl.movies" total="$ctrl.total"></search-movie>
        <show-movies movies="$ctrl.movies" total="$ctrl.total"></show-movies>
      `
    }

    function controller() {
      var vm = this;
      vm.movies = [];
      vm.total = 0;
      vm.$onInit = $onInit;

      function $onInit() {
        vm.total = [];
        vm.total = 0;
      }
    }
}());
