angular
  .module('beer')
  .controller("NewController", function ($scope, Beer, supersonic) {
    $scope.beer = {};

    supersonic.bind($scope, "navbarTitle");

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newbeer = new Beer($scope.beer);
      newbeer.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });