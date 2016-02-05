folliesApp.controller('AwardsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.logo = {
    url: 'images/20131113_0440.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };
  $scope.resources = {
    'nominationForm': {
      url: 'resources/Ethical Life Award Nomination.doc',
      event: 'Download: Ethical Life Awards Nomination Application'
    }
  };

  $scope.awards = [
    {
      year: 2014,
      inhouse: 'Rebecca Simmons (KCI)',
      firm: 'Charles L. Smith (Jackson Walker)'
    },
    {
      year: 2013,
      inhouse: 'William B. F. Baumann',
      firm: 'Allan K. DuBois'
    },
    {
      year: 2012,
      inhouse: 'Stan McCormick (Frost Bank)',
      firm: 'Steve Fogle (Jackson Walker)'
    },
    {
      year: 2011,
      inhouse: 'Security Service Credit Union',
      firm: 'James L. "Rocky" Walker'
    },
    {
      year: 2010,
      inhouse: 'Valero Energy',
      firm: 'Haynes & Boone/Lamont Jefferson'
    },
    {
      year: 2009,
      inhouse: 'USAA',
      firm: 'George Kampmann'
    },
    {
      year: 2008,
      inhouse: 'NuStar',
      firm: 'George Spencer, Sr.'
    }
  ];
}]);
