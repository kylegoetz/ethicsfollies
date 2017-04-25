folliesControllers.controller('SponsorsCtrl', ['$rootScope','$scope', 'apiService', function($rootScope,$scope,apiService){
  //var year = $state.params.year;
  //if(  typeof year === 'undefined'  ) $scope.year = new Date().getFullYear();
  //else $scope.year = year;
  $scope.year = '2016';

  $rootScope.logo = {
    url: 'images/dancers.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };

  function loadSponsors() {
    apiService.getSponsors($scope.year)
      .then(function(data) {
        applySponsors(data);
      });
  }

  function applySponsors(data) {
    $scope.sponsors = data;
  }

  $scope.sponsors = [
    {
      type: 'Community Leader',
      sponsors: [
        {
          name: 'USAA'
        },
        {
          name: 'Valero'
        }
      ]
    },
    {
      type: 'Reception',
      sponsors: [
        {
          name: 'Frost Bank'
        }
      ]
    },
    {
      type: 'Producer',
      sponsors: [
        {"name":"Mission Pharmacal"},
        {"name":"San Antonio Bar Association"},
				{"name":"Dykema Cox Smith"}
      ]
    },
    {
      "type": "Playbill",
      "sponsors": [
        {"name":"Jackson Walker"},
        {"name":"Norton Rose Fulbright"}
      ]
    },
		{
			type: "Costume/Backdrops",
			sponsors: [
				{name: 'Cronin PLLC'}
			]
		},
    {
      "type": "Table",
      "sponsors": [
				{name: 'Attorneys of the Ariel House'},
				{name: 'Brenna & Alex Nava'},
        {name:'Brock Person Guerra Reyna'},
				{name: 'Cokinos, Bosien & Young'},
        {name:'CPS Energy'},
        {name:'Fisher & Phillips'},
        {"name":"Haynes & Boone"},
        {"name":"HEB"},
        {name:'ISS Facility Services'},
        {"name":"Judges for CJP"},
				{name: 'Kilpatrick Townsend'},
				{name: 'Langley & Banack'},
				{name: 'LexisNexis CounselLink'},
				{name: 'NuStar Energy'},
				{name: 'Schmoyer Reinhard LLP'},
        {"name":"Security Service Federal Credit Union"},
				{name: 'Southwest Research Institute'},
        {"name":"USAA"},
        {"name":"Whataburger"},
				{name: 'Zachry Group'},
				{name: 'Rackspace'}
      ]
    },
		{
			type: '1/2 Table',
			sponsors: [
				{name: 'Pulman, Cappuccio, Pullen, Benson & Jones, LLP'}
			]
		},
    {
      "type": "Snacks",
      "sponsors": [
				{name: 'HEB'},
				{name: 'Midnight Rodeo'},
        {name: 'Kim Tindall & Associates'}
      ]
    }
  ];

  //loadSponsors();

}]);
