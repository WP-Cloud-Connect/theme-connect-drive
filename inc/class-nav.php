<?php

class SoftLaB_Nav {

	private static $instance = null;

	public function __construct() {
		/**
		 * Register Nav menus.
		 */
		if ( function_exists( 'register_nav_menus' ) ) {
			register_nav_menus(
				array(
					'main-menu'                   => 'Main Navigation Menu',
					'footer-menu'                 => 'Footer Menu',
					'footer-menu-bottom'          => 'Footer Menu Bottom',
				)
			);
		}
	}

	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

}

SoftLaB_Nav::instance();