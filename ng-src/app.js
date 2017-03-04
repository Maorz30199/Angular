'use strict';
angular.module("Rout",["ui.router"])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('app',{
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'controllerApp'
    })
    .state('repo',{
    url: '/repo/:name',
    templateUrl: 'templates/repo.html',
    controller: 'RepoController'
  });
  $locationProvider.html5Mode(true);
});
      /*.when("/",{
        controller: "controllerApp",
        templatesUrl: "templates/home.html"
      })
      .when("/repo/:name",{
        controller: "RepoController",
        templatesUrl: "templates/repo.html"
      })
      .otherwise({redirecTo: "/"});

      $locationProvider.html5Mode(true);
  })*/
