<?php

if (! defined('ABSPATH')) {
    exit();
}

class Connect_Drive_Hooks {

    private static $instance = null;

    public function __construct() {
        add_action('wp_head', [$this, 'preload_assets']);
        add_filter('softdocs_page_template', [$this, 'docs_page']);
    }

    public function preload_assets() {

        // font
        $fonts = [
            'Inter-Light.woff2',
            'Inter-Regular.woff2',
            'Inter-Medium.woff2',
            'Inter-SemiBold.woff2',
            'Inter-Bold.woff2'
        ];

        foreach ($fonts as $font) {
            echo '<link rel="preload" href="' . get_template_directory_uri() . '/assets/fonts/' . $font . '" as="font" type="font/woff2" crossorigin>' . "\n";
        }
    }

    public function docs_page($page_template) {
        if (is_page('docs')) {
            $page_template = get_theme_file_path('templates/docs.php');
            return $page_template;
        } else {
            return $page_template;
        }
    }

    /**
     * Summary of instance
     * @return Connect_Drive_Hooks
     */
    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}
Connect_Drive_Hooks::instance();
