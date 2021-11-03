const slider = tns({
	container: '.product-show .slider-list',
	autoplay: true,
	mouseDrag: true,
	controls: false,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	navContainer: '.product-show .thumbnail .thumbnail-list',
	navAsThumbnails: true,
	preventScrollOnTouch: true,
})

const userGallerySliderIsMobile = tns({
	container: '.product-user-gallery.is-mobile .slider-list',
	autoplay: true,
	mouseDrag: true,
	controls: false,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	navContainer: '.product-user-gallery.is-mobile .thumbnail .thumbnail-list',
	navAsThumbnails: true,
	preventScrollOnTouch: true,
	edgePadding: 20,
	gutter: 4,
	loop: false,
})

const userGallerySliderIsTablet = tns({
	container: '.product-user-gallery.is-tablet .slider-list',
	mouseDrag: true,
	navContainer: '.product-user-gallery.is-tablet .thumbnail .thumbnail-list',
	navAsThumbnails: true,
	preventScrollOnTouch: true,
	edgePadding: 75,
	gutter: 6,
	loop: false,
	controls: true,
	controlsContainer: '.product-user-gallery.is-tablet .arrow-button-group',
})
