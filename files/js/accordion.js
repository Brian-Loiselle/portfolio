jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('#mobile-hamburger').removeClass('active');
		jQuery('#mobile-hamburger').attr('aria-expanded', 'false');
		jQuery('#hamburger-menu').fadeOut(325).removeClass('open');
		jQuery('.sub-menu-content').removeClass('active');
		jQuery('#header').removeClass('expanded');
	}

	jQuery('#mobile-hamburger').click(function (e) {
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(currentAttrValue).fadeIn(325).addClass('open');
			jQuery('#header').addClass('expanded');
		}

		e.preventDefault();
	});
});