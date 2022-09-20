(function(){

  images = [
    'images/giveacode.jpg',
    '/images/cochran.jpg',
    'images/flippers.jpg',
    'images/ursula-lair.jpg',
    'images/dancers.jpg',
    'images/2022-ela-award-winners.jpg',
    'images/carousel/Tele%20Ethics%20Follies%202012_3071.jpg',
    'images/carousel/2011 Ethics Follies_0194.jpg',
    'images/carousel/2011 Ethics Follies_0388.jpg',
    'images/carousel/2011 Ethics Follies_0478.jpg',
    'images/carousel/2011 Ethics Follies_0677.jpg',
    'images/carousel/2011 Ethics Follies_1094.jpg',
    'images/carousel/2011 Ethics Follies_1337.jpg',
    'images/carousel/2012-bcwba.jpg',
    'images/carousel/2012-businessmen.jpg',
    'images/carousel/2012-cast.jpg',
    'images/carousel/2012-hat.jpg',
    'images/carousel/2012-jerrysegel.jpg',
    'images/carousel/2012-maraca4.jpg',
    'images/carousel/2012-mrsfrump.jpg',
    'images/carousel/2012-wall.jpg',
    'images/carousel/2013-barracuda.jpg',
    'images/carousel/2013-dontstop.jpg',
    'images/carousel/20131113_0440.jpg',
    'images/carousel/20131113_2253.jpg',
	'images/bg-awards.jpg',
    'images/carousel/Act II_Scene 1_03.jpg',
    'images/carousel/Act II_Scene 2_16.jpg',
    'images/carousel/Act II_Scene 5_04.jpg',
    'images/carousel/Act II_Scene 8_14.jpg',
    'images/carousel/Act I_Scene 11_07.jpg',
    'images/carousel/Act I_Scene 2_07.jpg',
    'images/carousel/Ethics Follies 2010_1757.jpg',
    'images/carousel/Ethics Follies 2010_2043.jpg',
    'images/carousel/Ethics Follies_1671.JPG',
    'images/carousel/Prologue_01.jpg',
    'images/carousel/Tele Ethics Follies 2012_2478.jpg',
    'images/carousel/Tele Ethics Follies 2012_3071.jpg',
    'images/carousel/carolburnett.jpg',
    'images/carousel/dancers.jpg',
    'images/carousel/flippers.jpg',
    'images/carousel/vita.jpg'
  ];

  $(function(){
    setTimeout(function(){
      _.each(images, function(image){
        new Image().src = image;
      });
    }, 1000);
  });
})();
