folliesControllers
.controller('SponsorsCtrl', SponsorsCtrl);

function SponsorsCtrl($rootScope,$scope,apiService, sponsorYear) {
  $scope.year = sponsorYear;

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
}
