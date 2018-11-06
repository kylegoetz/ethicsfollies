folliesApp
  .constant('pageBackgrounds', {
    'awards': '/images/bg-awards.jpg',
    'buy': '/images/giveacode.jpg',
    'home': '/images/cochran.jpg',
    'mission': '/images/Tele%20Ethics%20Follies%202012_3071.jpg',
    'schedule': '/images/ursula-lair.jpg',
    'sponsors': '/images/dancers.jpg',
    'visuals': '/images/vita.jpg',
  })
  .constant('routerStates', [
    {
      "name": "home",
      "url": "/",
      "templateUrl": "js/controllers/home/home.html",
      "controller": "HomeCtrl"
    },
    {
      "name":"sponsors",
      "url": "/sponsors",
      "templateUrl": "js/controllers/sponsors/sponsors.html",
      "controller": "SponsorsCtrl",
    },
    {
      "name":"visuals",
      "url": "/visuals",
      "templateUrl": "js/controllers/visuals/visuals.html",
      "controller": "VisualsCtrl"
    },
    {
      "name":"awards",
      "url": "/awards",
      "templateUrl": "js/controllers/awards/awards.html",
      "controller": "AwardsCtrl"
    },
    {
      "name":"buy",
      "url": "/buy",
      "templateUrl": "js/controllers/buy/buy.html",
      "controller": "BuyCtrl"
    },
    {
      "name":"contact",
      "url": "/contact",
      "templateUrl": "js/controllers/contact/contact.html",
      "controller": "ContactCtrl"
    },
    {
      "name":"schedule",
      "url": "/schedule",
      "templateUrl": "js/controllers/schedule/schedule.html",
      "controller": "ScheduleCtrl"
    },
    {
      "name":"mission",
      "url": "/mission",
      "templateUrl": "js/controllers/mission/mission.html",
      "controller": "MissionCtrl"
    }
  ]);