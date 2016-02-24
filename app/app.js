var app = angular.module("SongApp", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/song-list', {
        templateUrl: 'partials/song-list.html',
        controller: 'LoadSongsToDom'
      })
    .otherwise('/songs-list');
}]);
