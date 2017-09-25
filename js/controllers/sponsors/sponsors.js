folliesControllers.controller('SponsorsCtrl', ['$rootScope','$scope', 'apiService', function($rootScope,$scope,apiService){
    $scope.year = '2016';

  $rootScope.logo = {
    url: 'images/dancers.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };

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
