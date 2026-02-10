<?php

if (! defined('ABSPATH')) {
    exit();
}

class Connect_Drive_Widget {

    private static $instance = null;

    public function __construct() {
        add_action('widgets_init', [$this, 'connect_drive_register_widgets']);
    }

    public function connect_drive_register_widgets() {
        // Area 1.
        register_sidebar(
            array(
                'name'          => 'Primary Widget Area (Sidebar)',
                'id'            => 'primary_widget_area',
                'before_widget' => '',
                'after_widget'  => '',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );

        // Area 2.
        register_sidebar(
            array(
                'name'          => 'Secondary Widget Area (Header Navigation)',
                'id'            => 'secondary_widget_area',
                'before_widget' => '',
                'after_widget'  => '',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );

        // Area 3.
        register_sidebar(
            array(
                'name'          => 'Third Widget Area (Footer)',
                'id'            => 'third_widget_area',
                'before_widget' => '',
                'after_widget'  => '',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );
        // Area 4.
        register_sidebar(
            array(
                'name'          => 'Four Widget Area (Single Sidebar)',
                'id'            => 'single_sidebar_area',
                'before_widget' => '',
                'after_widget'  => '',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );
    }

    /**
     * Summary of instance
     * @return Connect_Drive_Widget
     */
    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}
Connect_Drive_Widget::instance();
