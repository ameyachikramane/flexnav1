$(document).ready(function(){
    	$(".menu-icon").click(function(){
        $(".nav-links").toggleClass("nav-active").toggleClass("nav-closed");
        $(".navbar").toggleClass("navbar-active").toggleClass("navbar-closed");
        $(".fas").toggleClass("fa-bars").toggleClass("fa-times");
        $(".hero-right").toggle();
    });
});