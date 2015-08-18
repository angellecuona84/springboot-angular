'use strict';

angular.module('films.principal', ['ngRoute','films.filmes'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'principal/principal.html'
        })
        .when('/consultarFilmes',{
            controller: 'FilmsController',
            controllerAs:'vm',
            templateUrl: 'filmes/filmes.html'
        })
        .otherwise({redirectTo: '/principal'});
}]);

