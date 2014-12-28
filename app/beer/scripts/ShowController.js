angular
  .module('beer')
  .controller("ShowController", function ($scope, Beer, supersonic) {
   
    $scope.setSuperscopeVar = function () {
      $scope.superscopeVar = "I'd like one now!";
    };
    supersonic.bind($scope, "superscopeVar");

  });