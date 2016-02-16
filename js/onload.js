$(function(){
  $('#fullpage').fullpage({
    verticalCentered: false,
    onLeave: function(index, nextIndex, direction){
      setTimeout(function(){
        $.fn.fullpage.destroy('all');
        $('.landing-page').remove();
      }, 700);
    }
  });
});
function applyAnim(sel, x) {
  $(sel).addClass(x);
}
$(function(){
  //setTimeout(function(){applyAnim('#logo img','hinge');}, 2000);
  setTimeout(function(){
    //document.getElementById('main').scrollIntoView();
    $.fn.fullpage.moveSectionDown();
  }, 6000);
});
