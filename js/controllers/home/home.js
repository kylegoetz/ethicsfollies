(function(){
  folliesControllers
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$rootScope'];

  function HomeCtrl($scope,$rootScope){

    activate();


    /////////


    function activate(){
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
