folliesControllers.controller('VisualsCtrl',['$rootScope','$scope','$modal',function($rootScope,$scope,$modal){
  $scope.carouselIndex = 0;

  $rootScope.logo = {
    url: 'images/vita.jpg',
    bgcolor: '',
    halign: 'center',
    valign: 'top',
    cover: 'cover'
  };

  $scope.links = [
    {
    	href: 'images/carousel/2011 Ethics Follies_0194.jpg',
    	description: 'Maria explains her plans for the company to her ethically-challenged co-workers.'
    },
    {
    	href: 'images/carousel/2011 Ethics Follies_0478.jpg',
    	description: 'An alcoholic lawyer sings "Old Man Liver" to remind the audience about services available to attorneys coping with chemical dependency.'
    },
    {
    	href: 'images/carousel/2011 Ethics Follies_0677.jpg',
    	description: 'IT employees peacefully discuss data privacy and security policies.'
    },
    {
    	href: 'images/carousel/2011 Ethics Follies_1094.jpg',
    	description: 'Company employees offer a helpful hint about dealing with workplace racism.'
    },
    {
    	href: 'images/carousel/2011 Ethics Follies_1337.jpg',
    	description: 'Sally and Ace sing a duet about ethics philosophies.'
    },
    {
    	href: 'images/carousel/2012-bcwba.jpg',
    	description: 'The Bexar County Women\'s Bar Association was celebrated in 2012 before the show with a champagne toast, as Dan Lopez, the President of ACC\'s Board of Directors, captured this great photo.  The BCWBA has been a consistent supporter of the ethics conference and the ACC was excited to thank them in person.  The attorneys started a high kick line right after this photo was taken.'
    },
    {
    	href: 'images/carousel/2012-businessmen.jpg',
    	description: 'Choreographer Gloria Liu used some of the original choreography from the show being parodied along with her original dance moves to create a fantastic finale.'
    },
    {
    	href: 'images/carousel/2012-cast.jpg',
    	description: 'The Cast and Crew of <em>How to Succeed In Business Without Ever Lying</em>, the Ethics Follies 2012 production at The Charline McCombs Empire Theatre.'
    },
    {
    	href: 'images/carousel/2012-hat.jpg',
    	description: 'Actress Anna Gangai wears a hat with the skyline of New York City in the finale of <em>How to Succeed in Business Without Ever Lying</em>.'
    },
    {
    	href: 'images/carousel/2012-jerrysegel.jpg',
    	description: 'Attorney Jerry Segal (Lee Cusenbary) has to decide whether to quit or give celebrity contact information to the crooked Vice Presidents at Frump Enterprises.  He decides to get drunk to avoid the issue and sings he will <em>call the Feds tomorrow</em> to turn them in for fraud and Dodd Frank violations.'
    },
    {
    	href: 'images/carousel/2012-maraca4.jpg',
    	description: 'Maraca Cuatro, the annual ethics telenovela, was really fun in 2012 , with a flash mob dance number filmed at the Weston Center downtown.'
    },
    {
    	href: 'images/carousel/2012-mrsfrump.jpg',
    	description: 'Actress Kathleen Rubbo brought her talents to the Charline McCombs Empire Theatre stage in 2012 with her comically blunt character Abigail Frump, who fired her son for turning her company into <em>another episode of American Greed!</em>'
    },
    {
    	href: 'images/carousel/2012-wall.jpg',
    	description: 'Celebrating our fifth year at The Empire Theatre, some of the cast and crew signed the wall in the halls of the dressing rooms under the Empire and Majestic theatres.  It\'s right across from <em>The Lion King</em>\'s cast signatures... no big deal.'
    },
    {
    	href: 'images/carousel/2013-barracuda.jpg',
    	description: '<em>Barracuda</em> was an audience favorite, sung by regular Ethics Follies performer, Sherry Gibbs Houston.'
    },
    {
    	href: 'images/carousel/2013-dontstop.jpg',
    	description: 'In 2013, Ethics Follies <em>Age of Rock</em> took us back to the 1980\'s with rock anthems, a live band (The Court Jesters) and a rockin\' good time.'
    },
    {
    	href: 'images/carousel/20131113_0440.jpg',
    	description: 'Bobby belts at a rock concert after it is revealed a major star has been using him as vocal track for years.'
    },
    {
    	href: 'images/carousel/20131113_2253.jpg',
    	description: 'Rockers fight to save the Bourbon Room from a corrupt city politician razing it to the ground.'
    },
    {
    	href: 'images/carousel/Act II_Scene 1_03.jpg',
    	description: 'The Greek Gods reveal to Susan that she needs to change her management style to encourage her employees to act ethically.'
    },
    {
    	href: 'images/carousel/Act II_Scene 2_16.jpg',
    	description: 'Mia\'s girlfriends after a wild bachelorette party on the Greek island of Ethicos.'
    },
    {
    	href: 'images/carousel/Act II_Scene 5_04.jpg',
    	description: 'Esmerelda urges Susan to learn to learn from past mistakes but not let guilt keep you from future success.'
    },
    {
    	href: 'images/carousel/Act II_Scene 8_14.jpg',
    	description: 'Susan and the Soul Sisters give totally impromptu concert for friends, family, and hotel guests.'
    },
    {
    	href: 'images/carousel/Act I_Scene 11_07.jpg',
    	description: 'Biff offers Mia some friendly advice about using a written code of ethics to save her mother\'s hotel.'
    },
    {
    	href: 'images/carousel/Act I_Scene 2_07.jpg',
    	description: 'Poverty-stricken hotel employees sing about how they rob their guests.'
    },
    {
    	href: 'images/carousel/Ethics Follies 2010_1757.jpg',
    	description: 'The Addams Family shares their knowledge of mortgage fraud.'
    },
    {
    	href: 'images/carousel/Ethics Follies 2010_2043.jpg',
    	description: 'Sue Sylvester lectures the glee club.'
    },
    {
    	href: 'images/carousel/Ethics Follies_1671.JPG',
    	description: 'B. Trey Hastily puts on a show for the son of company owner, Mister Decent.'
    },
    {
    	href: 'images/carousel/Prologue_01.jpg',
    	description: 'Carmen Miranda, perennial Follies host, guides the audience along an ethical journey.'
    },
    {
    	href: 'images/carousel/Tele Ethics Follies 2012_2478.jpg',
    	description: 'Paris Frump exhorts the audience to claim responsibility for their actions.'
    },
    {
    	href: 'images/carousel/Tele Ethics Follies 2012_3071.jpg',
    	description: 'Sutton gets excited about finding people she can trust.'
    },
    {
    	href: 'images/carousel/carolburnett.jpg',
    	description: 'Mama\s family encounters ethical issues'
    },
    {
    	href: 'images/carousel/vita.jpg',
    	description: 'Lucy and Ricky reunite after individually learning about ethical behavior.'
    }
  ];


  ///////

}]);
