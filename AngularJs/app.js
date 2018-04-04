


Provider.controller('MainCtrl', function ($scope) {
    $scope.bar = 0;
    $scope.foo = function () {
      $scope.bar += 1;
    };
  });


DOMCompiler.bootstrap();