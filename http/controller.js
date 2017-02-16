var app = angular.module("controller",[]);
app.controller("controlador",function($scope,$http){
  $scope.posts = [];
  $scope.newpost= {};
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
    console.log(response.data);
    $scope.posts = response.data;
   },function(err){
    console.log(err);
   });
 $scope.addpost = function(){
   $http.post("https://jsonplaceholder.typicode.com/posts",{
     title: $scope.newpost.title,
     body: $scope.newpost.body,
     userId: 1
   })
   .then(function(response){
   $scope.posts.push($scope.newpost);
   $scope.newpost={};
   },function(err){
   console.log(err);
   });
 }
});
