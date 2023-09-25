folliesControllers
.controller('SponsorsCtrl', SponsorsCtrl);

function SponsorsCtrl($rootScope,$scope,apiService, year) {
  $scope = { _tag: 'loading' };
  // $scope.year = sponsorYear;
  // $scope.sponsors = null;

  loadSponsors();

  //////

  function loadSponsors() {
    apiService.getSponsors(year)
      .then(function(data) {
        $scope = {
          _tag: 'loaded',
          year,
          sponsors: data,
        };
        // $scope.year = year;
        // $scope.sponsors = data;
        console.debug("Sponsors state after load: ", JSON.stringify($scope));
      });
  }
}

/**
 * type State = { _tag: 'loading' } | {
 *     year: number,
 *     sponsors: Sponsor[]
 * }
 */