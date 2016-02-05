var folliesApp = angular.module('folliesApp',
  [
    'ui.bootstrap',
    'folliesControllers',
    'ngSanitize',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.piwik',
    'ui.router'
]);

var folliesControllers = angular.module('folliesControllers', []);

folliesApp.config(['$stateProvider', '$analyticsProvider', '$urlRouterProvider', function($stateProvider, $analyticsProvider, $urlRouterProvider){
  console.log('r',$urlRouterProvider);
  //$urlRouterProvider.when('/home','/');
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'js/controllers/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('sponsors',{
      url: '/sponsors',
      templateUrl: 'js/controllers/sponsors/sponsors.html',
      controller: 'SponsorsCtrl',
    })
    .state('visuals',{
      url: '/visuals',
      templateUrl: 'js/controllers/visuals/visuals.html',
      controller: 'VisualsCtrl'
    })
    .state('awards',{
      url: '/awards',
      templateUrl: 'js/controllers/awards/awards.html',
      controller: 'AwardsCtrl'
    })
    .state('buy',{
      url: '/buy',
      templateUrl: 'js/controllers/buy/buy.html',
      controller: 'BuyCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'js/controllers/contact/contact.html',
      controller: 'ContactCtrl'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'js/controllers/schedule/schedule.html',
      controller: 'ScheduleCtrl'
    });
}]);

(function(angular){function startupRun($rootScope) {

  angular
    .module('folliesApp')
    .run(startupRun);

  startupRun.$inject = ['$rootScope'];

  $rootScope.logo = {
    url: '/images/cochran.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };
  var $state = angular.element('[ng-app]').injector().get('$state');
  $state.go('');

  $rootScope.affixed = false;

  $rootScope.$on('$eventStateSuccess', function(event, toState, toParams, fromState, fromParams, error){
    //console.info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        (toState);
    //$rootScope.isHome = toState.current.name === '/home';
    $rootScope.title = $state.current.name;
    console.log(event);
  });

  $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams){
    $rootScope.from = from;
    $rootScope.fromParams = fromParams;
    var $state = angular.element('[ng-app]').injector().get('$state');
    console.log($state);
    //$rootScope.title = $state.current.name;
  });
}
})(angular);
