app.controller("ClimaController",function($scope,clima){

  $scope.temp = function(){
    return clima.temp;
  };

  $scope.description = function(){
    return clima.description;
  };

  $scope.refresh=function(ciudad, pais){
    clima.loadWeather(ciudad, pais);
  }






});
