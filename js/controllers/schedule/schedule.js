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
        date: 'May 22 (noon)',
        event: 'San Antonio Bar Association',
        location: 'St. Mary\'s University, San Antonio, Texas',
        notes: 'Fifty-minute cabaret-style preview'
      },
      {
        date: 'May 28 (11am)',
        event: 'U.S. Fifth Circuit Conference',
        location: 'Hyatt Lost Pines Resort, 575 Hyatt Lost Pines Road, Cedar Creek, Texas 78612',
        notes: 'One-hour cabaret-style review (including three federal judges!)'
      },
      {
        date: 'August 1 (2pm)',
        event: 'American Bar Association Convention',
        location: 'Chicago Convention Center or nearby',
        notes: 'One and a half-hour show in large convention space'
      },
      {
        date: 'September 19 (TBD)',
        event: 'Texas State Bar Employment Law Seminar',
        location: 'J.W. Marriott Hotel, San Antonio, Texas',
        notes: 'Forty-five minute preview of Scamalot'
      },
      {
        date: 'October 28 (2pm)',
        event: 'Scamalot',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      },
      {
        date: 'October 29 (7pm)',
        event: 'Scamalot',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      }
    ];
  }
})();
