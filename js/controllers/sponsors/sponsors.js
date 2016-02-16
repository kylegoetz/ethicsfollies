folliesControllers.controller('SponsorsCtrl', ['$rootScope','$scope', 'apiService', function($rootScope,$scope,apiService){
  //var year = $state.params.year;
  //if(  typeof year === 'undefined'  ) $scope.year = new Date().getFullYear();
  //else $scope.year = year;
  $scope.year = '2015';

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
        {"name":"Dykema Cox Smith"},
        {"name":"Mission Pharmacal Company"},
        {"name":"San Antonio Bar Foundation"},
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
      type: "Media",
      "sponsors": [
        {"name":"San Antonio Business Journal"},
        {"name":"Texas Lawyer"}
      ]
    },
    {
      "type": "Table",
      "sponsors": [
        {name:'Brock Person Guerra Reyna'},
        {name:'CPS Energy'},
        {name:'Crouch & Ramey, LLP'},
        {name:'Fisher & Phillips'},
        {"name":"Haynes and Boone"},
        {"name":"HEB"},
        {
          "name":"Hoblit Ferguson Darling LLP",
          //"url": "http://www.hfdlaw.com/index.cfm"
        },
        {name:'ISS Facility Services'},
        {"name":"Judges for CJP"},
        {"name":"LexisNexis CounselLink"},
        {name:'NuStar Energy L.P.'},
        {"name":"Propel Financial Services"},
        {"name":"Rackspace"},
        {"name":"Security Services Federal Credit Union"},
        {"name":"Strasburger Price Oppenheimer Blend"},
        {"name":"USAA"},
        {"name":"Whataburger"},
        {"name":"Zachry Industrial Inc."},
        {name:'Attorneys of Ariel House'},
        {name:'Branscomb PC'},
        {name:'Pulman, Cappuccio, Pullen, Benson & Jones, LLP.'},
        {name:'Southwest Research Institute'},
        {name:'Ogletree, Deakins, Nash, Smoak & Stewart, P.C.'}
      ]
    },
    {
      type: 'Costume',
      sponsors: [{
        name: 'Daffer McDaniel LLP'
      }]
    },
    {
      "type": "Snack/Intermission",
      "sponsors": [
        {name: 'Kim Tindall & Associates'},
        {name: 'Preferred Counsel'},
        {name: 'Midnight Rodeo'}
      ]
    }
  ];

  //loadSponsors();

}]);
