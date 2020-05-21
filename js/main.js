// cover btn scroll
$(document).ready(function(){
    $(function(){ $('#btnScroll').click(function(){ 
        $('html,body').animate({scrollTop:$('#contentWrap').offset().top}, 700);});  
    }); 
}); 

// animation
new WOW().init();

// component Modal
$(document).ready(function(){
	$("#btnProfile").click(function(){
		$("#modalProfile, .modal-backdrop").addClass("visible");
		$("body").addClass("modal-open");
	});
	$(".close").click(function(){
		$("#modalProfile, .modal-backdrop").removeClass("visible");
		$("body").removeClass("modal-open");
	});
});
$(document).click(function(event){
	if (!$(event.target).closest("#modalProfile, #btnProfile").length) {
		$("body").find("#modalProfile, .modal-backdrop").removeClass("visible");
		$("body").removeClass("modal-open");
	}
});

// sticky Nav
$(document).ready(function() {
  var stickyTop = $('.stickyNav').offset().top;

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    if (stickyTop < windowTop) {
      $('.stickyNav').css('position', 'fixed');
    } else {
      $('.stickyNav').css('position', 'absolute');
    }
  });
});

$(window).scroll(function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.section');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop-100 && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});