(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  function schedule($scope, $http, currentShow, apiService) {
    $scope.previousShows = [];

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
