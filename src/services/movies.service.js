(function() {
  'use strict';

  angular
    .module('moviesApp')
    .factory('MoviesService', MoviesService);

  MoviesService.$inject = ['$http','Api'];

  function MoviesService($http,Api) {
    var text = '';
    return {
      setText: setText,
      getText: getText,
      search: search,
      scroll: scroll,
      getById: getById
    }

    function setText(value){
      text = value;
    }

    function getText(){
      return text;
    }

    function search() {
      return $http.get(`${Api}s=${getText()}`)
        .then((response) => response.data)
        .catch((err) => err)
    }

    function scroll(page) {
      return $http.get(`${Api}s=${getText()}&page=${page}`)
        .then((response) => response.data)
        .catch((err) => err)
    }

    function getById(id){
      return $http.get(`${Api}i=${id}`)
        .then((response) => response.data)
        .catch((err) => err)
    }
  }
}());
