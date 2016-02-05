folliesControllers.controller('SponsorsCtrl', ['$rootScope','$scope', 'apiService', function($rootScope,$scope,apiService){
  //var year = $state.params.year;
  //if(  typeof year === 'undefined'  ) $scope.year = new Date().getFullYear();
  //else $scope.year = year;
  $scope.year = '2014';

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
        {"name":"Cox Smith"},
        {"name":"Enterprise Rent-a-Car"},
        {"name":"Mission Pharmacal Company"},
        {"name":"San Antonio Bar Foundation"},
        {"name":"Woodlawn Theatre"},
        {"name":"Playhouse of San Antonio"}
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
      "type": "Playbill",
      "sponsors": [
        {"name":"Jackson Walker"},
        {"name":"Norton Rose Fulbright"}
      ]
    },
    {
      "type": "Table",
      "sponsors": [
        {"name":"Attorneys of the Ariel House"},
        {"name":"Barton East & Caldwell"},
        {"name":"Billing Services Group"},
        {"name":"Daffer McDaniel"},
        {"name":"CPS Energy"},
        {"name":"Crouch & Ramey"},
        {"name":"Haynes and Boone"},
        {"name":"HEB"},
        {"name":"Judges for CJP"},
        {
          "name":"Hoblit Ferguson Darling LLP",
          "url": "http://www.hfdlaw.com/index.cfm"
        },
        {"name":"LexisNexis"},
        {"name":"Propel Financial Services"},
        {"name":"Pulman, Cappuccio, Pullen Benson & Jones"},
        {"name":"Rackspace"},
        {"name":"Security Services Federal Credit Union"},
        {"name":"South Texas Money Management, Ltd."},
        {"name":"Southwest Research Institute"},
        {"name":"St. Mary's University School of Law"},
        {"name":"Strasburger Price Oppenheimer Blend"},
        {"name":"USAA"},
        {"name":"Whataburger"},
        {"name":"Zachry Holdings, Inc."}
      ]
    },
    {
      "type": "Snack/Intermission",
      "sponsors": [
        {"name":"Cacheaux, Cavazos & Newton"},
        {"name":"Lone Star Bakery"},
        {"name":"Midnight Rodeo"},
        {"name":"Tiago's Cabos Grille"},
        {"name":"Branscomb PC"}
      ]
    }
  ];

  //loadSponsors();

}]);
