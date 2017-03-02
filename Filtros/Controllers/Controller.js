app.controller("AnimalController",function($scope){

  $scope.animals=[
    {name:"perro", raza:"Canino", genero:"M"},
    {name:"Gato", raza:"Felino", genero:"F"},
    {name:"Pato", raza:"Ave", genero:"M"},
    {name:"Cocodrilo", raza:"Reptil", genero:"F"}
  ];
  $scope.attr=['name','raza','genero'];
});
