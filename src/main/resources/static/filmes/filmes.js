'use strict';

angular.module('films.filmes', ['ngResource'])

.controller('FilmsController', ['$http',
    function($http) {
        var vm = this;
        vm.getFilms = function() {
            $http.get('/films').success(function(data) {
                vm.films = data;
            });
        }

        vm.addFilm = function() {
            $http.post('/films',
                {
                    title : vm.filmes.title,
                    year : vm.filmes.year,
                    director : vm.filmes.director
                }

            ).success(function(data) {
                    vm.msg = 'Pelicula creada correctamente';
                    vm.getFilms();
                }).error(function(data) {
                    vm.msg = 'Se ha producido un error';
                });
            vm.filmes.title = "";
            vm.filmes.year = "";
            vm.filmes.director = "";
        }
    } ]);


