// index nav btn scroll
$(document).ready(function(){
    $(function(){ 
      $('#btnScroll').click(function(){ 
        $('html,body').animate({
          scrollTop:$('#contentWrap').offset().top
        }, 700);
      });
    }); 
}); 

// index component Modal
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

// index nav spy
$(window).scroll(function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.section');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop-100 && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="/index.html#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});

// index marketing fancybox
$(document).ready(function() {    
  $('.fancybox').fancybox();
  $("#fancybox-manual-b").click(function() {
    $.fancybox.open({
      href : 'iframe.html',
      type : 'iframe',
      padding : 5
    });
  });
});