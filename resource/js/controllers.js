angular.module("AppAngular")
.controller("MainController",function($scope,$resource,PostResource){
  User= $resource("http://jsonplaceholder.typicode.com/users:id",{id: "@id"});
  $scope.posts= PostResource.query();
  $scope.users= User.query();
  $scope.removePost= function(post){
    Post.delete({id: PostResource.id},function(data){
      console.log(data);
    });
    $scope.posts = $scope.posts.filter(function(element){
      return element.id !== post.id;
    });
  }
})
.controller("PostController",function($scope,PostResource,$state,$stateParams,$location){
  $scope.title= "Editar post"
  $scope.post= PostResource.get({id: $stateParams.id});
  console.log($stateParams.id);
  $scope.savePost = function(){
    PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
      console.log(data);
      $location.path("/");
    });
  }
})
.controller("NewPostController",function($scope,PostResource,$state,$stateParams,$location){
  $scope.post= {};
  $scope.title= "Crear post"
  $scope.savePost = function(){
    PostResource.save({data: $scope.post},function(data){
      console.log(data);
      $location.path("/");
    });
  }
});
