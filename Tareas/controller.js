angular.module("ToDoList",["LocalStorageModule"])
  .controller("ToDoController",function($scope,localStorageService) {
    if(localStorageService.get("angular-list")){
      $scope.todo = localStorageService.get("angular-list");
    }else {
      $scope.todo = [];
    }
    $scope.$watchCollection('todo',function(newValue,oldValue){
      localStorageService.set("angular-list",$scope.todo);
    });
    $scope.addActv= function()
    {
      $scope.todo.push($scope.newActv);
      $scope.newActv = {};
    }
    $scope.clean = function()
    {
      $scope.todo = [];
    }
  });
