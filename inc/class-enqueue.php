<?php

class Connect_Drive_Enqueue {

	private static $instance = null;

	public function __construct() {
		add_action('wp_enqueue_scripts', [$this, 'frontend_assets']);
		add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);
	}


	/**
	 * Loading All CSS Stylesheets and Javascript Files.
	 *
	 * @since v1.0
	 */
	function frontend_assets($hook) {
		$theme_version = wp_get_theme()->get('Version');

		$page_template = get_page_template_slug();
		$file_name     = basename($page_template, '.php');

		if (! is_user_logged_in()) {
			wp_dequeue_style('dashicons');
			wp_deregister_style('dashicons');
		}

		// Home page assets
		if (is_home()) {
			// Common Styles
			wp_enqueue_style('slick', get_theme_file_uri('assets/vendor/slick/slick.css'), array(), $theme_version);
			wp_enqueue_style('lity', get_theme_file_uri('assets/vendor/lity/lity.min.css'), array(), $theme_version);

			// Common Scripts.
			wp_enqueue_script('slick', get_theme_file_uri('assets/vendor/slick/slick.min.js'), array(), $theme_version, true);
			wp_enqueue_script('counter', get_theme_file_uri('assets/vendor/counter/jquery.counterup.min.js'), array(), $theme_version, true);
			wp_enqueue_script('waypoint', get_theme_file_uri('assets/vendor/counter/waypoints.min.js'), array(), $theme_version, true);
			wp_enqueue_script('lity', get_theme_file_uri('assets/vendor/lity/lity.min.js'), array(), $theme_version, true);
		}

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
		]);

		if ($is_pricing_page) {
			wp_enqueue_script('freemius-checkout', 'https://checkout.freemius.com/checkout.min.js', ['jquery'], false, true);
		}
	}

	/**
	 * Admin Assets
	 * @since 1.0.72
	 */
	function admin_enqueue_scripts($hook) {
		$theme_version = wp_get_theme()->get('Version');
		
		wp_enqueue_script('main', get_theme_file_uri('assets/js/admin.js'), array('jquery'), $theme_version, true);
	}


	/**
	 * Summary of instance
	 * @return Connect_Drive
	 */
	public static function instance() {
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

Connect_Drive_Enqueue::instance();
