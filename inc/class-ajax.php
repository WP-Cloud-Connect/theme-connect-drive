<?php

if( ! defined('ABSPATH') ){
    exit();
}

class Connect_Drive_Ajax {

    private static $instance = null;

    public function __construct() {

    }

    /**
     * Summary of instance
     * @return Connect_Drive_Ajax
     */
    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}
Connect_Drive_Ajax::instance();
