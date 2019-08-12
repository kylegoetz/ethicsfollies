(function(){
  angular
    .module('folliesApp')
    .directive('buyBox', BuyBox);

  BuyBox.$inject = [];

  function BuyBox() {
    return {
		link: function(scope) {
			console.log('linking function run', scope);
		},
      restrict: 'E',
      replace: true,
      template: '<div class="show-panel"><h3 ng-bind="date"/><h4 ng-bind="time"/><p ng-if="isAwardNight">With <em>Lee Cusenbary Ethical Life Awards</em> and a catered, open bar networking reception.</p>CLE fee: $<span ng-bind="cleFee"/> <a class="btn btn-default btn-sm" href="{{url}}">Buy</a></div>',
      scope: {
        date: '=',
		time: '=',
		isAwardNight: '=',
		cleFee: '=',
    nonCleFee: '=',
    discount: '=',
    nonCleEarlyBirdDiscount: '=',
		url: '='
      }
    };
  }
})();
