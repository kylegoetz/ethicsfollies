folliesApp.controller('HeaderCtrl',['$rootScope', '$scope', '$location', '$state', '$window', function($rootScope, $scope, $location, $state, $window){

  $rootScope.prices = {
    dvd: 100
  };

  $rootScope.show = {
    name: 'Scamalot',
    secondShowDate: 'October 29, 2015'
  };

  $rootScope.visitFacebook = function() {
    $window.open('http://www.facebook.com/home.php#/pages/wwwethicsfolliescom/210046265244?v=wall');
  };

  $rootScope.contact = {
    title: 'ACC Exective Director',
    name: 'Amber Clark',
    phoneNumber: '(210) 723-8769',
    email: 'accasouthcentral@yahoo.com'
  };
  $scope.affixed = 'top';
  $scope.brand = '<i class="fa fa-facebook-square" style="position:absolute;left:1em;top:.8em;"></i>';
  $scope.brandClick = $rootScope.visitFacebook;
  $scope.menus = [
    {
      title: 'Home',
      action: 'home'
    },
    {
      title: 'Sponsors',
      action: 'sponsors'
    },
    {
      title: 'About Us',
      menu: [
        {
          title: 'Sights & Sounds',
          action: 'about.visuals'
        },
        {
          title: 'Ethical Life Awards',
          action: 'about.awards'
        },
        {
          title: 'Schedule',
          action: 'schedule'
        }
        /*{
          title: 'History',
          action: 'about.history'
        },*/
        /*{
          divider: true
        },
        {
          title: 'Contact Us',
          action: 'about.contact'
        }*/
      ]
    },
    {
      title: 'Registration & DVDs',
      action: 'buy'
    }
  ];
  $scope.navfn = function(action) {
    switch(action) {
      case 'home':
        //$location.url('/');
        $state.go('home');
        break;
      case 'sponsors':
        $state.go('sponsors', {year:'2014'});
        break;
      case 'about.visuals':
        //$location.url('/visuals');
        $state.go('visuals');
        break;
      case 'about.awards':
        //$location.url('/awards');
        $state.go('awards');
        break;
      case 'about.history':
        break;
      case 'about.contact':
        //$location.url('/contact');
        $state.go('contact');
        break;
      case 'schedule':
        $state.go('schedule');
        break;
      case 'buy':
        //$location.url('/buy');
        $state.go('buy');
        break;
    }
  };
}])
.run(function($templateCache){
  $templateCache.put('js/controllers/header/header.html','<nav class="navbar" ng-class="{\'navbar-inverse\': inverse,\'navbar-default\': !inverse,\'navbar-affixed-top\': affixed == \'top\',\'navbar-fixed-bottom\': affixed == \'bottom\'}" role="navigation"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"><span class="sr-only">Toggle Navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" ng-click="visitFacebook()" ng-bind-html="haveBranding()"></a></div><div class="collapse navbar-collapse" id="navbar-menu"><ul class="nav navbar-nav" ng-if="hasMenus()"><li ng-init="menu.toggle=false" ng-repeat="menu in menus" ng-class="{dropdown: hasDropdownMenu(menu), open: menu.toggle}"><a ng-if="!hasDropdownMenu(menu)" ng-click="navAction(menu.action)">{{menu.title}}</a><a ng-if="hasDropdownMenu(menu)" class="dropdown-toggle" data-toggle="dropdown" ng-mouseover="menu.toggle=true" ng-mouseleave="menu.toggle=false">{{menu.title}} <b class="caret"></b></a><ul ng-if="hasDropdownMenu(menu)" ng-mouseover="menu.toggle=true" ng-mouseleave="menu.toggle=false" class="dropdown-menu"><li ng-repeat="item in menu.menu" ng-class="{true: \'divider\'}[isDivider(item)]"><a ng-if="!isDivider(item)" ng-click="navAction(item.action)">{{item.title}}</a></li></ul></li></ul><form ng-if="search.show" class="navbar-form navbar-right" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="Search" ng-model="search.terms"><button class="btn btn-default" type="button" ng-click="searchfn()"><span class="glyphicon glyphicon-search"></span></button></div></form></div></div></nav><script>$(\'li.dropdown:contains(About Us)\').click(function(e){e.preventDefault();$(this).toggleClass(\'open\');});</script>');
});
