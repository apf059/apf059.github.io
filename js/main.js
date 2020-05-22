// cover btn scroll
$(document).ready(function(){
    $(function(){ 
      $('#btnScroll').click(function(){ 
        $('html,body').animate({
          scrollTop:$('#contentWrap').offset().top
        }, 700);
      });
      $('#btn-about').click(function(){ 
        $('html,body').animate({
          scrollTop:$('#about').offset().top
        }, 700);
      });
      $('#btn-projects').click(function(){ 
        $('html,body').animate({
          scrollTop:$('#projects').offset().top
        }, 700);
      });
      $('#btn-books').click(function(){ 
        $('html,body').animate({
          scrollTop:$('#books').offset().top
        }, 700);
      });

      // $('a[href*=#]:not([href=#])').click(function(){
        // var target = $(this.hash);
        // $('html,body').stop().animate({
          // scrollTop:target.offset().top
        // }, 400);
        // return false;
      // })
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
        var navElem = $('li[id="btn-' + id+ '"]');
        // var navElem = $('a[href="#' + id+ '"]');
    navElem.addClass('active').siblings().removeClass( 'active' );
    // navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});

// open mobile menu
$(document).ready(function(){
  $('.open-menu').click(function(){
    $('.menu-mobile-hidden').slideToggle();
  });
});


$(window).ready(function(){
  var pageWidth = $(window).width();
  if(pageWidth < 1150) {
    $('.menu-mobile-hidden li').click(function(){
      $('.menu-mobile-hidden').slideToggle('100');
    });
  }
});

// $(document).ready(function(){
//   $('.stickyNav button').click(function(){
//     $(this).next().toggleClass('menu-mobile-hidden');
//   });
//   $('.menu-mobile-hidden li').click(function(){
//     $(this).parent().toggleClass('menu-mobile-hidden');
//   })
// })