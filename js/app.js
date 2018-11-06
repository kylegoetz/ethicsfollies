var folliesApp = angular.module('folliesApp',
  [
    'ui.bootstrap',
    'folliesControllers',
    'ngSanitize',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.piwik',
    'ui.router'
])
.constant('currentShow', {
  counter: '21st',
  year: 2018,
  title: 'Shyster Act',
})
.constant('sponsorYear', 2018)
.run(initApp);

var folliesControllers = angular.module('folliesControllers', []);

folliesApp.config(['$stateProvider', '$analyticsProvider', '$urlRouterProvider', '$httpProvider', 'routerStates', function($stateProvider, $analyticsProvider, $urlRouterProvider, $httpProvider, routerStates){
  
  routerStates.forEach(function(state) {
    const { url, templateUrl, controller } = state;
    $stateProvider.state(state.name, { url, templateUrl, controller });
  });
}]);

function initApp($rootScope, $state, pageBackgrounds, routerStates) {
  //Initialize values
  $rootScope.style = {'background-image': 'url(/images/cochran.jpg)'};
  $rootScope.affixed = false;

  //Load home if no or invalid page requested
  if(  routerStates.map(function(state) { return state.name; }).indexOf($state.current.name) === -1  ) {
    $state.go('home');
  }

  //page change updates background
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
    console.log('$sCS', event, toState);
    $rootScope.style['background-image'] = 'url('+pageBackgrounds[toState.name]+')';
  });
}