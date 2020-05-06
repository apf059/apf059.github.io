// cover btn scroll
$(document).ready(function(){
    $(function(){ $('#btnScroll').click(function(){ 
        $('html,body').animate({scrollTop:$('#profile').offset().top}, 700);});  
    }); 
}); 

// animation
new WOW().init();

// component Modal
$(document).ready(function(){
	$("#myBtn").click(function(){
		$("#myModal, .modal-backdrop").addClass("visible");
		$("body").addClass("modal-open");
	});
	$(".close").click(function(){
		$("#myModal, .modal-backdrop").removeClass("visible");
		$("body").removeClass("modal-open");
	});
});
$(document).click(function(event){
	if (!$(event.target).closest("#myModal, #myBtn").length) {
		$("body").find("#myModal, .modal-backdrop").removeClass("visible");
		$("body").removeClass("modal-open");
	}
});