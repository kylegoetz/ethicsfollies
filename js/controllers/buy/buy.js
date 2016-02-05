folliesApp.controller('BuyCtrl',['$rootScope','$scope','$modal','$window',function($rootScope,$scope,$modal,$window){
  $rootScope.logo = {
    url: 'images/giveacode.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };

  $scope.registration = {
    cleHours: 2,
    early: {
      date: 'October 1, 2015',
      discount: 10
    },
    nonCleFee: 20,
    openDate: 'April 26, 2015',
    shows: [
      {
        index: 1,
        date: 'October 28, 2015',
        time: '2–4:30pm',
        url: 'https://www.regonline.com/ethicsfolliesSCAMAlotMatinee',
        cleFee: 70
      },
      {
        index: 2,
        date: 'October 29, 2015',
        time: '7–9:30pm',
        url: 'https://www.regonline.com/ethicsfolliesSCAMAlotEvening',
        cleFee: 90
      }
    ]
  };
  $scope.buy = function(index) {
    var url = _.findWhere($scope.registration.shows, {index:index}).url;
    //$modal.open({
    //  templateUrl: url
    //});
    $window.open(url);
  };

}]);
