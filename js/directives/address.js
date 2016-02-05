(function(){
  angular
    .module('folliesApp')
    .directive('map-address', mapAddress);

  mapAddress.$inject = [];

  function mapAddress() {
    return {
      restrict: 'E',
      replace: true,
      template: '<div ng-bind="name"></div><div ng-bind="street"></div><span ng-bind="city"></span>, <span ng-bind="state"></span><span ng-bind="zip"></span>',
      scope: {
        name: '=',
        street: '=',
        state: '=',
        city: '=',
        zip: '='
      }
    };
  }
})();
