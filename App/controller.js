var app = angular.module("controller",[]);
app.controller("controlador",["$scope",function($scope){
  $scope.nombre = "Mauricio";
  $scope.nuevocomentario = {};
  $scope.comentarios = [
  {
    comentario : "Buen video",
    username : "Mauricio"
  },
  {
    comentario : "bien hecho",
    username : "Madurita"
  }
];
  $scope.agregarcomentario = function(){
    $scope.comentarios.push($scope.nuevocomentario);
    $scope.nuevocomentario = {};
  };
}]);
