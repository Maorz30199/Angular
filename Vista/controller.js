angular.module("app",[])
  .controller("controller",function($scope) {
    $scope.nombre = "Mauricio";
    setTimeout(function(){
      $scope.$apply(function(){
        $scope.nombre = "Codig"
      });
    },2000);


  });
