folliesApp.controller('AwardsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.logo = {
    url: 'images/Act I Scene 10_11_Scamalot_2015_0008.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };
  $scope.resources = {
    'nominationForm': {
      url: 'resources/award-nomination-2016.pdf',
      event: 'Download: Ethical Life Awards Nomination Application'
    }
  };

  $scope.awards = [
	  {
		  year: 2016,
		  inhouse: 'Colleen M. Goff (posthumous)',
		  firm: 'Andrew L. Kerr'
	  },
    {
      year: 2015,
      inhouse: 'Carlos Peña (Pioneer Energy Services Corp.)',
      firm: 'Dan Webster (Dykema Cox Smith)'
    },
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
