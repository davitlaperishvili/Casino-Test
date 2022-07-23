//Swiper Slider
import Swiper from "swiper/bundle";

export default function plugindParameters() {
	// Selector styling
	$("select.selectori").each(function () {
		var placeholder = $(this).data("placeholder") || "Default placeholder";
		$(this).select2({
			minimumResultsForSearch: -1,
			placeholder: placeholder,
		});
	});
	// Slider
	let mySwihero_sliderer = new Swiper(".hero_slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
		},
	});
	// Gallery
	$(".magnific").each(function () {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			gallery: {
				enabled: true,
			},
			zoom: {
				enabled: true,
				duration: 300,
			},
		});
	});
	if ($(".magnific_video").length) {
		$(".magnific_video").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	}
}
