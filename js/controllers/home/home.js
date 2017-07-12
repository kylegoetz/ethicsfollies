(function(){
  folliesControllers
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$rootScope', 'apiService'];

  function HomeCtrl($scope,$rootScope, api){

    activate();


    /////////


    function activate(){
		api.getRegistrationInfo().then(function(data){
			$scope.registration = data;
		});
      $scope.clickablePhone = $scope.contact.phoneNumber.replace('-','').replace('(','').replace(')','');
      $rootScope.logo = {
        url: '/images/cochran.jpg',
        bgcolor: '',
        halign: 'center',
        valign: 'top',
        cover: 'cover'
      };
    }
  }
})();
