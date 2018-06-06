(function($){
  angular.module('folliesApp').directive('fullPage', FullPage);

  function FullPage() {
    return {
      link: function(scope, elem, attr){
        elem.fullpage({
          verticalCentered: false,
          onLeave: function(index, nextIndex, direction){
            setTimeout(function(){
              $.fn.fullpage.destroy('all');
              $('.landing-page').remove();
            }, 700);
          }
        });
        setTimeout(function(){
          //document.getElementById('main').scrollIntoView();
          $.fn.fullpage.moveSectionDown();
        }, 6000);
      },
      restrict: 'A',
      replace: false,
      scope: {
        delay: '='
      },
    }
  }
})(jQuery);
