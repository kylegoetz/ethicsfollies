(function($){
  angular
    .module('folliesApp')
    .directive('swipebox', swipebox);

  swipebox.$inject = ['$state'];

  function swipebox($state) {
    return {
      restrict: 'E',
      scope: {
        links: '='
      },
      link: link
    };
  }


  ////////////



  function link($scope, iElm, iAttrs, controller) {
    var panels = [];
    var options = {
      afterClose: goHome,
      hideBarsDelay: 300000 //to make sure it doesn't hide
    };
    _.each($scope.links, function(link){
      panels.push({href:link.href,title:link.description});
    });
    $.swipebox(panels, options);
    iElm.on('$destroy', function(){
      //put anything here to clean up stuff swipebox made
    });

    function goHome() {
      var $state = angular.element(iElm).injector().get('$state');
      var $rootScope = angular.element(iElm).injector().get('$rootScope');
      if(  !angular.isDefined($rootScope.from)  || !angular.isDefined($rootScope.fromParams)  ) {
        $state.go('home');
      } else {
        $state.go($rootScope.from, $rootScope.fromParams);
      }
    }
  }


})(jQuery);
