/* =============================================== 
									Preloader
===============================================  */

$(window).on('load', function () { //Make sure that hole website is loaded
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
}); 

/* =============================================== 
									Team Section
===============================================  */

$(function(){
  $("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			 // breakpoint from 0 up
			 0 : {
				items: 1
			 },
			 // breakpoint from 480 up
			 480 : {
				items: 2
			 }
		}
	});
});

/* =============================================== 
									Progress Bars
===============================================  */

$(function(){
	
	$("#progress-elements").waypoint(function() {
		
		$(".progress-bar").each(function(){

			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"
			}, 1000);
	
		});
		this.destroy();
	}, {
		offset: 'bottom-in-view'
	});
	
	/**/
});

/* =============================================== 
									Responsive Tabs
===============================================  */

$(function () {

	$("#services-tabs").responsiveTabs({
		animation: 'slide'
	});

});

/* =============================================== 
									Portfolio
===============================================  */

$(window).on('load', function(){

	//initialize isotope
	$("#isotope-container").isotope({});

	//filter itens on click button
	$("#isotope-filters").on('click', 'button', function() {
		
		//get filter value
		var filterValue = $(this).attr('data-filter');

		//filter portfolio
		$("#isotope-container").isotope({ filter: filterValue });

		//active button
		$("#isotope-filters").find('.active').removeClass('active');
		$(this).addClass('active');
	
	});

});

/* =============================================== 
									Magnifier
===============================================  */
$(function () {

	$("#portfolio-wrapper").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {enabled: true}
	});

});

/* =============================================== 
									Testemonials
===============================================  */

$(function(){
  $("#testemonial-slider").owlCarousel({
		items: 1,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left" style="outline: 0;"></i>', '<i class="fa fa-angle-right style="outline: 0;""></i>']
	});
});

/* =============================================== 
									Stats
===============================================  */

$(function () {

	$(".counter").counterUp({
		delay: 10,
		time: 2000
	}) 

});

/* =============================================== 
										Clients
===============================================  */

$(function(){
  $("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			// breakpoint from 0 up
			0 : {
				items: 2
			},
			// breakpoint from 480 up
			480 : {
				items: 3
			},
			768 : {
				items: 6
			}
	 }
	});
});

/* =============================================== 
										Google Maps
===============================================  */

$(window).on('load', function() {

	//variables to google map
	var myAdress = 'Av. Agamenon Magalhães, 2656, Recife, PE, Brasil';
	var myLatLong = {lat: -8.046641, lng: -34.891930};

	//1. render google map
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 15, center: myLatLong});
	
	//2. add marker
	var marker = new google.maps.Marker({
		position: myLatLong, 
		map: map,
		title: "Clique para ver Endereço"
	});
	
	//3. open info window
	var contentString = myAdress;

  var infowindow = new google.maps.InfoWindow({
    content: myAdress
  });

	//4. show info window on click
	marker.addListener('click', function() {
    infowindow.open(map, marker);
	});
	
	//resize 
	google.maps.event.addDomListener(window, 'resize', function ()  {
		
		var center = map.getCenter();
		google.maps.event.trigger(map, 'resize');
		map.setCenter(center);

	});
	
});

/* =============================================== 
										Navigation
===============================================  */

/* Show and Hide White Navigation */
$(function () {

	//show hide nav on load
	showHideNav();


	//show hid nav on scroll
	$(window).scroll(function() {
		
		showHideNav();

	});

	function showHideNav () {

		// .scrollTop() diz a posição vertical atual 
		if( $(window).scrollTop() > 50 ) {
			
			//show white nav
			$("nav").addClass("white-nav-top");
			//show dark logo
			$(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
			//back to top buttom
			$(".btn-back-to-top").fadeIn();

		} else {
			
			//hide white nav
			$("nav").removeClass("white-nav-top");
			//show logo
			$(".navbar-brand img").attr("src", "img/logo/logo.png");
			//hide back to top buttom
			$(".btn-back-to-top").fadeOut();
		}

	}

});

// Navigation Smooth

$(function() {

	$("a.smooth-scroll").click(function (event) {

		event.preventDefault();

		//get section id #about #team etc...
		var section_id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(section_id).offset().top - 64
		}, 1250, "easeInOutExpo");

	});

})