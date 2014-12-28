angular
  .module('beer')
  .controller("IndexController", function ($scope, Beer, supersonic) {
    $scope.beers = null;
    $scope.showSpinner = true;

    supersonic.bind($scope, "superscopeVar");
    $scope.setSuperscopeVar = function () {
      $scope.superscopeVar = "I need a beer...";
    };

    Beer.all().whenChanged( function (beers) {
        $scope.$apply( function () {
          $scope.beers = beers;
          $scope.showSpinner = false;
        });
    });
  });