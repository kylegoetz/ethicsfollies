folliesApp.controller('BuyCtrl',['$rootScope','$scope','$modal','$window', 'apiService',function($rootScope,$scope,$modal,$window, api){
  $rootScope.logo = {
    url: 'images/giveacode.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };

	api.getRegistrationInfo().then(function(data){
		$scope.registration = data;
	});


  $scope.buy = function(index) {
    var url = _.findWhere($scope.registration.shows, {index:index}).url;
    $window.open(url);
  };

}]);
