(function(){
  folliesControllers
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope,$rootScope, apiService, currentShow){

    activate();


    /////////


    function activate(){
      $scope.currentShow = currentShow;
  		apiService.getRegistrationInfo().then(function(data){
  			$scope.registration = data;
  		});
      $scope.clickablePhone = $scope.contact.phoneNumber.replace('-','').replace('(','').replace(')','');
    }
  }
})();
