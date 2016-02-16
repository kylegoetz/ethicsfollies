(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  schedule.$inject = ['$scope', '$rootScope'];

  function schedule($scope, $rootScope) {
    $rootScope.logo = {
      url: 'images/ursula-lair.jpg',
      bgcolor: '',
      halign: 'center',
      valign: 'top',
      cover: 'cover'
    };

    $scope.performances = [
      {
        date: 'October 5 (3:30pm)',
        event: 'Chicago',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      },
      {
        date: 'October 6 (7pm)',
        event: 'Chicago',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      }
    ];
  }
})();
