(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  function schedule($scope, $rootScope, currentShow) {
    $scope.performances = [
      {
        date: 'October 31 (2pm)',
        event: currentShow.title,
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      },
      {
        date: 'Nov 1 (7pm)',
        event: currentShow.title,
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      }
    ];
  }
})();
