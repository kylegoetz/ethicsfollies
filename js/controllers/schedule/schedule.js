(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  function schedule($scope, $http, currentShow) {
    $http.get('/resources/schedule.json')
    .then(schedule => {
      $scope.performances = schedule.data.map(event => Object.assign({event: currentShow.title}, event));
    });
  }
})();
