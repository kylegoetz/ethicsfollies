/*
 * Usage: <div ng-repeat="item in items | slice:6:10">{{item}}</div>
 */
folliesApp.filter('slice', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
});
