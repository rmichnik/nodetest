(function ($, angular, _) {
  "use strict"

  var Main = angular.module("Core", []);

  Main.controller("MainCtrl", ['$scope', '$http',
    function ($scope, $http) {

      $scope.formData = {};
      $scope.userData = {};
      $scope.showFormLogin = true;

      $scope.getUserData = function() {
        $http.get('/user/session').success(function(data){
          if(!_.isEmpty(data)){
            $scope.userData = data;
            $scope.showFormLogin = false;
          }
        });
      }

      $scope.getUserData();

      $scope.doLogin = function () {
        $http.post('/user/login', $scope.formData)
          .success(function (data) {
            location.href = '/user/list';
          });
      };
      $scope.checkAuth = function (user) {
        console.log(user);
        if (user) {
          return true;
        }
        return false;
      };

      $scope.logout = function(){
        $http.post('/user/logout')
          .success(function(){
            location.href = '/';
        });
      };
    }
  ])
})(jQuery, angular, _);