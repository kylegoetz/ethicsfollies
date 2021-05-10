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
  counter: '23rd',
  year: 2021,
  title: 'The Princess Bribe',
})
.constant('sponsorYear', 2021)
.constant('pageBackgrounds', {
  'awards': '/images/bg-awards.jpg',
  'buy': '/images/giveacode.jpg',
  'home': '/images/cochran.jpg',
  'mission': '/images/Tele%20Ethics%20Follies%202012_3071.jpg',
  'schedule': '/images/ursula-lair.jpg',
  'sponsors': '/images/dancers.jpg',
  'visuals': '/images/vita.jpg',
})
.run(initApp);

var folliesControllers = angular.module('folliesControllers', []);

folliesApp.config(['$stateProvider', '$analyticsProvider', '$urlRouterProvider', function($stateProvider, $analyticsProvider, $urlRouterProvider){
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
    })
    .state('mission', {
      url: '/mission',
      templateUrl: 'js/controllers/mission/mission.html',
      controller: 'MissionCtrl'
    });
}]);

function initApp($rootScope, $state, pageBackgrounds) {
  //Initialize values
  $rootScope.style = {'background-image': 'url(/images/cochran.jpg)'};
  $rootScope.affixed = false;

  //Load up initial page
  // var $state = angular.element('[ng-app]').injector().get('$state');
  // $state.go('');

  //page change updates background
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
    console.log('$sCS', event, toState);
    $rootScope.style['background-image'] = 'url('+pageBackgrounds[toState.name]+')';
  });
}
