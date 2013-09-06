(function ($, angular, JSON, undefined) {
  "use strict"

  var User = angular.module("Core");

  User.controller("UserListCtrl", ['$scope', '$http',
    function ($scope, $http) {

      $scope.remove = function (id) {
        $http.post('/user/'+id+'/remove').success(function(result){
          if(result.success){
            location.reload();
          } else {
            console.log(result);
          }
        });
      };
    }
  ])
})(jQuery, angular, JSON);