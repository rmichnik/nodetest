(function ($, angular, JSON, undefined) {
  "use strict"

  var User = angular.module("Core");

  User.controller("UserCtrl", ['$scope', '$http',
    function ($scope, $http) {

      $scope.formData = {};

      $scope.new = function () {
        $http.post('/user/new', {'data': $scope.formData})
          .success(function(res){
            if(res.success){
              location.href = '/user/list';
            }
            console.log(res);
          });
      };
    }
  ])
})(jQuery, angular, JSON);