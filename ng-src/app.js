angular.module("Rout",["ngRoute"])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when("/",{
        controller: "controllerApp",
        templatesUrl: "templates/home.html"
      })
      .when("/repo/:name",{
        controller: "RepoController",
        templatesUrl: "templates/repo.html"
      })
      .otherwise({redirecTo: "/"});

      $locationProvider.html5Mode(true);
  })
