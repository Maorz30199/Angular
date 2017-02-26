angular.module("ToDoList",["LocalStorageModule"])
  .factory("ToDoService",function(localStorageService){
    var todoService = {};
      todoService.key = "angular-list";
      if(localStorageService.get(todoService.key)){
        todoService.activities = localStorageService.get(todoService.key);
      }else {
        todoService.activities = [];
      }
      todoService.activities = [];

      todoService.add = function(newActv){
        todoService.activities.push(newActv);
        todoService.updaLocalStorage();
      };

      todoService.updaLocalStorage = function(){
        localStorageService.set(todoService.key,todoService.activities);
      };

      todoService.clean = function(){
        todoService.activities = [];
        todoService.updaLocalStorage();
        return todoService.getAll();
      };

      todoService.getAll = function(){
        return todoService.activities;
      };

      todoService.removeItem = function(item){
        todoService.activities = todoService.activities.filter(function(activty){
          return activty !== item;
        });
        todoService.updaLocalStorage();
        return todoService.getAll();
      };

    return todoService;
  })
  .controller("ToDoController",function($scope,ToDoService){

    $scope.todo = ToDoService.getAll();
    $scope.addActv= function()
    {
      ToDoService.add($scope.newActv);
      $scope.newActv = {};
    }
    $scope.removeActv = function(item){
      $scope.todo = ToDoService.removeItem(item);
    }
    $scope.clean = function(){
      $scope.todo = ToDoService.clean();
    }
  });
