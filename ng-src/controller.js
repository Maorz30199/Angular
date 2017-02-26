angular.module("App",[])
  .controller("controllerApp",function($scope,$http){

    $http.get("https://api.github.com/users/Maorz30199/repos")
      .then(function(response){
        $scope.repos = response.data;
      },
      function(err){
        console.log(err);
      });
  });
