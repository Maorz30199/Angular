var app = angular.module("controller",[]);
app.controller("controlador",function($scope,$http){
  $scope.posts = [];
  $scope.loading = true;
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
    console.log(response.data);
    $scope.posts = response.data;
    $scope.loading = false;
   },function(err){
    console.log(err);
    $scope.loading = false;
   });
});
