angular.module("AppAngular",["lumx","ui.router","ngResource"])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('app',{
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'MainController'
  })
  .state('post',{
    url: '/post/:id',
    templateUrl: 'templates/post.html',
    controller: 'PostController'
  })
  .state('new',{
    url: '/posts/new',
    templateUrl: 'templates/post_form.html',
    controller: 'NewPostController'
  })
  .state('edit',{
    url: '/posts/edit/:id',
    templateUrl: 'templates/post_form.html',
    controller: 'PostController'
  });
});
