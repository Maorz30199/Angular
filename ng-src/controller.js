angular.module("Rout")
.controller("controllerApp",function($scope,$http){
  $scope.repos= [];
  $http.get("https://api.github.com/users/Maorz30199/repos")
    .then(function(response){
      $scope.posts = response.data;
      for(var i= response.data.length -1; i>= 0; i--){
        var repo = response.data[i];
        $scope.repos.push(repo.name);
        console.log(response.data);
      };
    },
    function(err){
      console.log(err);
    });
    $scope.optionSelected = function(data){
      $scope.$apply(function(){
        $scope.main_repo = data;
      })
    }
})

.controller("RepoController",function($scope,$http,$stateParams,$state){
  $scope.repo= {};
  console.log($stateParams.name);
  $http.get("https://api.github.com/repos/Maorz30199/"+$stateParams.name)
    .then(function(response){
      console.log($stateParams.name);
      $scope.repo = response.data;
    },
    function(err){
      console.log(err);
    });
})
