<?php

class Connect_Drive_Enqueue
{

	private static $instance = null;

	public function __construct()
	{
		add_action('wp_enqueue_scripts', [$this, 'frontend_assets']);
		add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);
	}


	/**
	 * Loading All CSS Stylesheets and Javascript Files.
	 *
	 * @since v1.0
	 */
	function frontend_assets($hook)
	{
		$theme_version = wp_get_theme()->get('Version');

		$page_template = get_page_template_slug();
		$file_name     = basename($page_template, '.php');

		if (! is_user_logged_in() && ! is_singular('docs') && ! is_page('docs') && ! is_archive('docs-category')) {
			wp_dequeue_style('dashicons');
			wp_deregister_style('dashicons');
		}

		// Home page assets
		if (is_home()) {
			// Common Styles
			wp_enqueue_style('slick', get_theme_file_uri('assets/vendor/slick/slick.css'), array(), $theme_version);
			wp_enqueue_style('lity', get_theme_file_uri('assets/vendor/lity/lity.min.css'), array(), $theme_version);

			wp_enqueue_style('home', get_theme_file_uri('assets/css/home.css'), array(), $theme_version, 'all');

			// Common Scripts.
			wp_enqueue_script('slick', get_theme_file_uri('assets/vendor/slick/slick.min.js'), array(), $theme_version, true);
			wp_enqueue_script('counter', get_theme_file_uri('assets/vendor/counter/jquery.counterup.min.js'), array(), $theme_version, true);
			wp_enqueue_script('waypoint', get_theme_file_uri('assets/vendor/counter/waypoints.min.js'), array(), $theme_version, true);
			wp_enqueue_script('lity', get_theme_file_uri('assets/vendor/lity/lity.min.js'), array(), $theme_version, true);
		}

		//pricing page assets
		if (is_page('pricing')) {
			wp_enqueue_style('pricing', get_theme_file_uri('assets/css/pricing.css'), array(), $theme_version, 'all');
		}

		// connect drive features page assets
		if (is_page('connect-drive-features')) {
			wp_enqueue_style('features', get_theme_file_uri('assets/css/features.css'), array(), $theme_version, 'all');
		}

		//connect drive integration page assets
		if (is_page('connect-drive-integration')) {
			wp_enqueue_style('integration', get_theme_file_uri('assets/css/integration.css'), array(), $theme_version, 'all');
		}

		//contact us page assets
		if (is_page('contact')) {
			wp_enqueue_style('contact', get_theme_file_uri('assets/css/contact.css'), array(), $theme_version, 'all');
		}
		//privacy policy page assets
		if (is_page('privacy-policy')) {
			wp_enqueue_style('privacy-policy', get_theme_file_uri('assets/css/privacy-policy.css'), array(), $theme_version, 'all');
		}
		//refund policy page assets
		if (is_page('refund-policy')) {
			wp_enqueue_style('refund-policy', get_theme_file_uri('assets/css/refund-policy.css'), array(), $theme_version, 'all');
		}
		//support policy page assets
		if (is_page('support-policy')) {
			wp_enqueue_style('support-policy', get_theme_file_uri('assets/css/support-policy.css'), array(), $theme_version, 'all');
		}
		//Terms of Service page assets
		if (is_page('terms-service')) {
			wp_enqueue_style('terms-service', get_theme_file_uri('assets/css/terms-service.css'), array(), $theme_version, 'all');
		}

		//Connect Drive File Browser assets
		if (is_page('connect-drive-file-browser')) {
			wp_enqueue_style('file-browser-demo', get_theme_file_uri('assets/css/file-browser-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive File Uploader assets
		if (is_page('connect-drive-file-uploader')) {
			wp_enqueue_style('file-uploader-demo', get_theme_file_uri('assets/css/file-uploader-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive list files assets
		if (is_page('connect-drive-list-files')) {
			wp_enqueue_style('list-files-demo', get_theme_file_uri('assets/css/list-files-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive Gallery assets
		if (is_page('connect-drive-gallery')) {
			wp_enqueue_style('photo-gallery-demo', get_theme_file_uri('assets/css/photo-gallery-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive Review & Approve assets
		if (is_page('connect-drive-review-approve-module')) {
			wp_enqueue_style('review-approve-demo', get_theme_file_uri('assets/css/review-approve-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive slider carousel assets
		if (is_page('connect-drive-slider-carousel')) {
			wp_enqueue_style('slider-carousel-demo', get_theme_file_uri('assets/css/slider-carousel-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive Media Player assets
		if (is_page('connect-drive-media-player')) {
			wp_enqueue_style('media-demo', get_theme_file_uri('assets/css/media-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive Search Box assets
		if (is_page('connect-drive-search-box')) {
			wp_enqueue_style('search-box-demo', get_theme_file_uri('assets/css/search-box-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive Embed Documents assets
		if (is_page('connect-drive-embed-documents')) {
			wp_enqueue_style('embed-documents-demo', get_theme_file_uri('assets/css/embed-documents-demo.css'), array(), $theme_version, 'all');
		}
		//Connect Drive woocommerce integration assets
		if (is_page('woocommerce-integration')) {
			wp_enqueue_style('woocommerce-integration', get_theme_file_uri('assets/css/woocommerce-integration.css'), array(), $theme_version, 'all');
		}

		// Single page assets
		if (is_single()) {
			wp_enqueue_style('single', get_theme_file_uri('assets/css/single.css'), array(), $theme_version, 'all');
		}
		// wp_enqueue_style('main', get_theme_file_uri('assets/css/single.css'), array(), $theme_version, 'all');
		wp_enqueue_style('main', get_theme_file_uri('assets/css/main.css'), array(), $theme_version, 'all');

		if (is_rtl()) {
			wp_enqueue_style('rtl', get_theme_file_uri('assets/css/rtl.css'), array(), $theme_version, 'all');
		}

		wp_enqueue_style('style', get_stylesheet_uri(), array(), $theme_version);

		wp_enqueue_script('main', get_theme_file_uri('assets/js/frontend.js'), array('jquery'), $theme_version, true);


		wp_localize_script('main', 'connectDrive', [
			'ajax_url'   => admin_url('admin-ajax.php'),
			'assets_url' => get_theme_file_uri('assets/'),
			'nonce'      => wp_create_nonce('connect-drive'),
		]);

		if (is_singular() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}

		//If pricing page, enqueue the freemius script
		$is_pricing_page = in_array($file_name, [
			'connect-drive-pricing',
			'home',
		]);
		$is_pricing_page = [
			'home'
		];

		if ($is_pricing_page) {
			wp_enqueue_script('freemius-checkout', 'https://checkout.freemius.com/checkout.min.js', ['jquery'], false, true);
		}
	}

	/**
	 * Admin Assets
	 * @since 1.0.72
	 */
	function admin_enqueue_scripts($hook)
	{
		$theme_version = wp_get_theme()->get('Version');

		wp_enqueue_script('main', get_theme_file_uri('assets/js/admin.js'), array('jquery'), $theme_version, true);

		// admin css 
		if ('appearance_page_theme-option' === $hook) {
			wp_enqueue_style('admin', get_theme_file_uri('assets/css/admin.css'), array(), $theme_version, 'all');
		}
	}


	/**
	 * Summary of instance
	 * @return Connect_Drive
	 */
	public static function instance()
	{
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

Connect_Drive_Enqueue::instance();
