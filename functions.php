<?php

if (! defined('ABSPATH')) {
    exit();
}

/**
 * General Theme Settings.
 *
 * @since v1.0
 */
if (! function_exists('connect_drive_setup_theme')) :
    function connect_drive_setup_theme() {
        // Make theme available for translation: Translations can be filed in the /languages/ directory.
        load_theme_textdomain('connect-drive', __DIR__ . '/languages');

        // Theme Support.
        add_theme_support('title-tag');
        add_theme_support('automatic-feed-links');
        add_theme_support('post-thumbnails');
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'script',
                'style',
                'navigation-widgets',
            )
        );

        // Add support for Block Styles.
        add_theme_support('wp-block-styles');
        // Add support for full and wide alignment.
        add_theme_support('align-wide');
        // Add support for editor styles.
        add_theme_support('editor-styles');
        // Enqueue editor styles.
        add_editor_style('style-editor.css');

        // Default Attachment Display Settings.
        update_option('image_default_align', 'none');
        update_option('image_default_link_type', 'none');
        update_option('image_default_size', 'large');

        // Custom CSS-Styles of Wordpress Gallery.
        add_filter('use_default_gallery_style', '__return_false');
    }

    add_action('after_setup_theme', 'connect_drive_setup_theme');

    // Disable Block Directory: https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md#block-directory
    remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets');
    remove_action('enqueue_block_editor_assets', 'gutenberg_enqueue_block_editor_assets_block_directory');
endif;


/**
 * Fire the wp_body_open action.
 *
 * Added for backwards compatibility to support pre 5.2.0 WordPress versions.
 *
 * @since v2.2
 */
if (! function_exists('wp_body_open')) :
    function wp_body_open() {
        /**
         * Triggered after the opening <body> tag.
         *
         * @since v2.2
         */
        do_action('wp_body_open');
    }
endif;


/**
 * Test if a page is a blog page.
 * if ( is_blog() ) { ... }
 *
 * @since v1.0
 */
function is_blog() {
    global $post;
    $posttype = get_post_type($post);

    return ((is_archive() || is_author() || is_category() || is_home() || is_single() || (is_tag() && ('post' === $posttype))) ? true : false);
}

/**
 * Style Edit buttons as badges: https://getbootstrap.com/docs/5.0/components/badge
 *
 * @since v1.0
 */
function connect_drive_custom_edit_post_link($output) {
    return str_replace('class="post-edit-link"', 'class="post-edit-link badge badge-secondary"', $output);
}
add_filter('edit_post_link', 'connect_drive_custom_edit_post_link');

function connect_drive_custom_edit_comment_link($output) {
    return str_replace('class="comment-edit-link"', 'class="comment-edit-link badge badge-secondary"', $output);
}
add_filter('edit_comment_link', 'connect_drive_custom_edit_comment_link');


if (! function_exists('connect_drive_content_nav')) :
    /**
     * Display a navigation to next/previous pages when applicable.
     *
     * @since v1.0
     */
    function connect_drive_content_nav($nav_id) {
        global $wp_query;

        if ($wp_query->max_num_pages > 1) :
?>
            <div id="<?php echo esc_attr($nav_id); ?>" class="d-flex mb-4 justify-content-between">
                <div><?php next_posts_link('<span aria-hidden="true">&larr;</span> ' . esc_html__('Older posts', 'connect-drive')); ?></div>
                <div><?php previous_posts_link(esc_html__('Newer posts', 'connect-drive') . ' <span aria-hidden="true">&rarr;</span>'); ?></div>
            </div><!-- /.d-flex -->
<?php
        else :
            echo '<div class="clearfix"></div>';
        endif;
    }

    // Add Class.
    function posts_link_attributes() {
        return 'class="btn btn-secondary btn-lg"';
    }

    add_filter('next_posts_link_attributes', 'posts_link_attributes');
    add_filter('previous_posts_link_attributes', 'posts_link_attributes');
endif;

include_once get_theme_file_path('inc/class-widget.php');
include_once get_theme_file_path('inc/class-enqueue.php');
include_once get_theme_file_path('inc/class-nav.php');
include_once get_theme_file_path('inc/class-ajax.php');

/**
 * Include Theme Customizer.
 *
 * @since v1.0
 */
$theme_customizer = __DIR__ . '/inc/customizer.php';
if (is_readable($theme_customizer)) {
    require_once $theme_customizer;
}


/**
 * Include Support for wordpress.com-specific functions.
 *
 * @since v1.0
 */
$theme_wordpresscom = __DIR__ . '/inc/wordpresscom.php';
if (is_readable($theme_wordpresscom)) {
    require_once $theme_wordpresscom;
}
