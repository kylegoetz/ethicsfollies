(function(){
  angular
    .module('folliesApp')
    .controller('ScheduleCtrl', schedule);

  function schedule($scope, $rootScope, currentShow) {
    $scope.performances = [
		{
			date: 'May 5 (12pm)',
			event: 'Abridged preview',
			location: 'Central Jury Room, Cadena-Reeves Justice Center, San Antonio, Texas',
			notes: 'SABA CLE'
		},
		{
			date: 'June 2 (10am)',
			event: 'Abridged preview',
			location: 'Westin Riverwalk (Navarro Ballroom), San Antonio',
			notes: '12th Anniversary SBOT Bench/Bar Bankruptcy Conference'
		},
      {
        date: 'October 25 (3:30pm)',
        event: 'Being Walter Decent',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
      },
      {
        date: 'October 26 (7pm)',
        event: 'Being Walter Decent',
        location: 'The Empire Theater, San Antonio, Texas',
        notes: 'Full performance'
	},
	{
		date: 'November 10',
		event: 'Being Walter Decent',
		location: 'Morristown, New Jersey',
		notes: ''
	}
    ];
  }
})();
