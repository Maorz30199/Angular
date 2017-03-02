app.controller("ClimaController", function($scope, clima) {

  $scope.temp = clima.temp;
  $scope.description = clima.description;

  $scope.refresh=function(ciudad, pais){
    clima.loadWeather(ciudad, pais);
  };

});
