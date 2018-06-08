folliesApp.controller('BuyCtrl',['$rootScope','$scope','$modal','$window', 'apiService', 'currentShow', function($rootScope,$scope,$modal,$window, api, currentShow){
  $scope.currentShow = currentShow;

	api.getRegistrationInfo().then(function(data){
		$scope.registration = data;
	});


  $scope.buy = function(index) {
    var url = _.findWhere($scope.registration.shows, {index:index}).url;
    $window.open(url);
  };

}]);
