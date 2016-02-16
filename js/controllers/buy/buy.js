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
      date: 'September 16, 2016',
      discount: 10
    },
    nonCleFee: 20,
    openDate: 'February 15, 2016',
    shows: [
      {
        index: 1,
        date: 'October 5, 2016',
        time: '3:30–5:30pm',
        url: 'https://www.regonline.com/Register/Checkin.aspx?EventID=1814542',
        cleFee: 70
      },
      {
        index: 2,
        date: 'October 6, 2016',
        time: '7–9:30pm',
        url: 'https://www.regonline.com/Register/Checkin.aspx?EventID=1814568',
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
