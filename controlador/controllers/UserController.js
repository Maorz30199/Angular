app.controller("UserController", function ($scope) {


  this.getCount = function(){
    return $scope.users.length;
  }


  $scope.users = [{name:'Dario', age:18}
                  ,{name:'Pepito', age:20}];

  $scope.addUser = function(user){
    $scope.users.push(user);
  }

});
