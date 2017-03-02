app.controller("MainController", function($scope) {

  $scope.user = {name:'Andres', age:22};


  $scope.direccion = "";
  $scope.$watch('direccion', function(oldValue, newValue){
    console.log(newValue);
  });


  $scope.$on('click', function() {
    $scope.user.name = "Juanito";
    $scope.user.age = 23;
  });

});
