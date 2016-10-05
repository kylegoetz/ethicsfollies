(function(){
	angular
		.module('folliesApp')
		.controller('MissionCtrl', Controller);

	Controller.$inject = ['$rootScope'];

	function Controller($rootScope) {
		$rootScope.logo = {
	    	url: 'images/Tele%20Ethics%20Follies%202012_3071.jpg',
		    bgcolor: '',
		    halign: 'center',
		    valign: 'top',
		    cover: 'cover'
		};
	}
})();