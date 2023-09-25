(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  function schedule($scope, $http, currentShow, apiService, year) {
    $scope.previousShows = [];
    $scope.year = year;

    $http.get('/resources/schedule.json')
    .then(schedule => {
      $scope.performances = schedule.data.map(event => Object.assign({event: currentShow.title}, event));
    });

    apiService.getShowList().then(shows => {
      $scope.previousShows = shows.filter(show => show.year !== currentShow.year).sort((a, b) => b.year - a.year);
      $scope.$apply();
    });

  }
})();
