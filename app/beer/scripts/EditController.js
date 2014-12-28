angular
  .module('beer')
  .controller("EditController", function ($scope, Beer, supersonic) {
    $scope.beer = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Beer.find(steroids.view.params.id).then( function (beer) {
      $scope.$apply(function() {
        $scope.beer = beer;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.beer.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
