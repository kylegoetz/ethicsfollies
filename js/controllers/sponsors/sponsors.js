folliesControllers.controller('SponsorsCtrl', ['$rootScope','$scope', 'apiService', function($rootScope,$scope,apiService){
    $scope.year = '2017';


  loadSponsors();

  //////

  function loadSponsors() {
    apiService.getSponsors($scope.year)
      .then(function(data) {
        $scope.sponsors = data;
      });
  }

  function applySponsors(data) {
    $scope.sponsors = data;
  }
}]);
