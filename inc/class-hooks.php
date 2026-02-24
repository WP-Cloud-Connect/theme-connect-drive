<?php

if (! defined('ABSPATH')) {
    exit();
}

class Connect_Drive_Hooks
{

    private static $instance = null;

    public function __construct()
    {
        add_filter('softdocs_page_template', [$this, 'docs_page']);
    }

    public function docs_page($page_template)
    {
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
    public static function instance()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}
Connect_Drive_Hooks::instance();
