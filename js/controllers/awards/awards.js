folliesApp.controller('AwardsCtrl', function($scope, $rootScope) {
  $scope.resources = {
    'nominationForm': {
      url: 'resources/award-nomination-form.pdf',
      event: 'Download: Ethical Life Awards Nomination Application'
    }
  };

  $scope.awards = [
    {
      year: 2019,
      inhouse: 'Alex Miller (Valero)',
      firm: 'John Weber, Jr. (Norton Rose Fulbright)',
    },
    {
      year: 2018,
      inhouse: 'Mike Gibbs (Whataburger Restaurants)',
      firm: 'Annalyn Smith (Schmoyer Reinhard, LLP)',
    },
    {
      year: 2017,
      inhouse: 'Steve Waters (USAA Realco)',
      firm: 'Sara Dysart'
    },
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
});
