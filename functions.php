<?php

require_once( 'theme-option/theme-option.php' );

if (! defined('ABSPATH')) {
    exit();
}

/**
 * General Theme Settings.
 *
 * @since v1.0
 */
if (! function_exists('connect_drive_setup_theme')) :
    function connect_drive_setup_theme()
    {
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
    function wp_body_open()
    {
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
function is_blog()
{
    global $post;
    $posttype = get_post_type($post);

    return ((is_archive() || is_author() || is_category() || is_home() || is_single() || (is_tag() && ('post' === $posttype))) ? true : false);
}

/**
 * Style Edit buttons as badges: https://getbootstrap.com/docs/5.0/components/badge
 *
 * @since v1.0
 */
function connect_drive_custom_edit_post_link($output)
{
    return str_replace('class="post-edit-link"', 'class="post-edit-link badge badge-secondary"', $output);
}
add_filter('edit_post_link', 'connect_drive_custom_edit_post_link');

function connect_drive_custom_edit_comment_link($output)
{
    return str_replace('class="comment-edit-link"', 'class="comment-edit-link badge badge-secondary"', $output);
}
add_filter('edit_comment_link', 'connect_drive_custom_edit_comment_link');


if (! function_exists('connect_drive_content_nav')) :
    /**
     * Display a navigation to next/previous pages when applicable.
     *
     * @since v1.0
     */
    function connect_drive_content_nav($nav_id)
    {
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
    function posts_link_attributes()
    {
        return 'class="btn btn-secondary btn-lg"';
    }

    add_filter('next_posts_link_attributes', 'posts_link_attributes');
    add_filter('previous_posts_link_attributes', 'posts_link_attributes');
endif;

include_once get_theme_file_path('inc/class-widget.php');
include_once get_theme_file_path('inc/class-enqueue.php');
include_once get_theme_file_path('inc/class-nav.php');
include_once get_theme_file_path('inc/class-ajax.php');
include_once get_theme_file_path('inc/class-hooks.php');

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


//update date on the blog page
function display_update_date()
{
    $date_format = get_option('date_format');
    $update_date = esc_html(get_the_modified_date($date_format));
    if (get_the_modified_time() !== get_the_date()) {
        return sprintf('<span class="update-date">%s</span>', $update_date);
    }
}


/**
 * Calculate reading time
 */
function connect_drive_get_reading_time()
{
    $content       = get_post_field('post_content', get_the_ID());
    $word_count    = str_word_count(strip_tags($content));
    $reading_speed = 200;
    $time          = ceil($word_count / $reading_speed);

    return $time . ' ' . _n('min read', 'min read', $time, 'connect-drive');
}


if ( ! function_exists( 'connect_drive_article_posted_on' ) ) :
    /**
     * "Theme posted on" pattern.
     *
     * @since v1.0
     */
    function connect_drive_article_posted_on() {
        printf(
                wp_kses_post( __( ' <div> <span class="sep"> Updated on </span><a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a></div>', 'softlab' ) ),
                esc_url( get_the_permalink() ),
                esc_attr( get_the_date() . ' - ' . get_the_time() ),
                esc_attr( get_the_date( 'c' ) ),
                esc_html( get_the_modified_date( 'F j, Y' ) )
        );
    }
endif;

/**
 * Template for Password protected post form.
 *
 * @since v1.0
 */
function connect_drive_password_form()
{
    global $post;
    $label = 'pwbox-' . (empty($post->ID) ? rand() : $post->ID);

    $output = '<div class="row">';
    $output .= '<form action="' . esc_url(site_url('wp-login.php?action=postpass', 'login_post')) . '" method="post">';
    $output .= '<h4 class="col-md-12 alert alert-warning">' . esc_html__('This content is password protected. To view it please enter your password below.', 'connect-drive') . '</h4>';
    $output .= '<div class="col-md-6">';
    $output .= '<div class="input-group">';
    $output .= '<input type="password" name="post_password" id="' . esc_attr($label) . '" placeholder="' . esc_attr__('Password', 'connect-drive') . '" class="form-control" />';
    $output .= '<div class="input-group-append"><input type="submit" name="submit" class="btn btn-primary" value="' . esc_attr__('Submit', 'connect-drive') . '" /></div>';
    $output .= '</div><!-- /.input-group -->';
    $output .= '</div><!-- /.col -->';
    $output .= '</form>';
    $output .= '</div><!-- /.row -->';

    return $output;
}

add_filter('the_password_form', 'connect_drive_password_form');


if (! function_exists('connect_drive_comment')) :
    /**
     * Style Reply link.
     *
     * @since v1.0
     */
    function connect_drive_replace_reply_link_class($class)
    {
        return str_replace("class='comment-reply-link", "class='comment-reply-link btn btn-outline-secondary", $class);
    }

    add_filter('comment_reply_link', 'connect_drive_replace_reply_link_class');

    /**
     * Template for comments and pingbacks:
     * add function to comments.php ... wp_list_comments( array( 'callback' => 'connect_drive_comment' ) );
     *
     * @since v1.0
     */
    function connect_drive_comment($comment, $args, $depth)
    {
        $GLOBALS['comment'] = $comment;
        switch ($comment->comment_type):
            case 'pingback':
            case 'trackback':
            ?>
                <li class="post pingback">
                    <p><?php esc_html_e('Pingback:', 'connect-drive'); ?><?php comment_author_link(); ?><?php edit_comment_link(esc_html__('Edit', 'connect-drive'), '<span class="edit-link">', '</span>'); ?></p>
                <?php
                break;
            default:
                ?>
                <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
                    <article id="comment-<?php comment_ID(); ?>" class="comment">
                        <footer class="comment-meta">
                            <div class="comment-author vcard">
                                <?php
                                $avatar_size = ('0' !== $comment->comment_parent ? 68 : 136);
                                echo get_avatar($comment, $avatar_size);

                                /* translators: 1: comment author, 2: date and time */
                                printf(
                                    wp_kses_post(__('%1$s, %2$s', 'connect-drive')),
                                    sprintf('<span class="fn">%s</span>', get_comment_author_link()),
                                    sprintf(
                                        '<a href="%1$s"><time datetime="%2$s">%3$s</time></a>',
                                        esc_url(get_comment_link($comment->comment_ID)),
                                        get_comment_time('c'),
                                        /* translators: 1: date, 2: time */
                                        sprintf(esc_html__('%1$s ago', 'connect-drive'), human_time_diff((int) get_comment_time('U'), current_time('timestamp')))
                                    )
                                );

                                edit_comment_link(esc_html__('Edit', 'connect-drive'), '<span class="edit-link">', '</span>');
                                ?>
                            </div><!-- .comment-author .vcard -->

                            <?php if ('0' === $comment->comment_approved) : ?>
                                <em class="comment-awaiting-moderation"><?php esc_html_e('Your comment is awaiting moderation.', 'connect-drive'); ?></em>
                                <br />
                            <?php endif; ?>
                        </footer>

                        <div class="comment-content"><?php comment_text(); ?></div>

                        <div class="reply">
                            <?php
                            comment_reply_link(
                                array_merge(
                                    $args,
                                    array(
                                        'reply_text' => esc_html__('Reply', 'connect-drive') . ' <span>&darr;</span>',
                                        'depth'      => $depth,
                                        'max_depth'  => $args['max_depth'],
                                    )
                                )
                            );
                            ?>
                        </div><!-- /.reply -->
                    </article><!-- /#comment-## -->
    <?php
                break;
        endswitch;
    }

    /**
     * Custom Comment form.
     *
     * @since v1.0
     * @since v1.1: Added 'submit_button' and 'submit_field'
     * @since v2.0.2: Added '$consent' and 'cookies'
     */
    function connect_drive_custom_commentform($args = array(), $post_id = null)
    {
        if (null === $post_id) {
            $post_id = get_the_ID();
        }

        $commenter     = wp_get_current_commenter();
        $user          = wp_get_current_user();
        $user_identity = $user->exists() ? $user->display_name : '';

        $args = wp_parse_args($args);

        $req      = get_option('require_name_email');
        $aria_req = ($req ? " aria-required='true' required" : '');
        $consent  = (empty($commenter['comment_author_email']) ? '' : ' checked="checked"');
        $fields   = array(
            'author'  => '<div class="form-floating folat-name mb-3">
                            <label class="form-label" for="author">' . esc_html__('Name', 'connect-drive') . ($req ? '<span>*</span>' : '') . '</label>
							<input type="text" id="author" name="author" class="form-control" value="' . esc_attr($commenter['comment_author']) . '" placeholder="' . esc_html__('Your Name', 'connect-drive') . ($req ? '' : '') . '"' . $aria_req . ' />
							
						</div>',
            'email'   => '<div class="form-floating emails mb-3">
                            <label class="form-label" for="email">' . esc_html__('Email', 'connect-drive') . ($req ? '<span>*</span>' : '') . '</label>
							<input type="email" id="email" name="email" class="form-control" value="' . esc_attr($commenter['comment_author_email']) . '" placeholder="' . esc_html__('Your Email', 'connect-drive') . ($req ? '' : '') . '"' . $aria_req . ' />
							
						</div>',
            'url'     => '',
            'cookies' => '<p class="form-check mb-3 comment-form-cookies-consent">
							<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" class="form-check-input" type="checkbox" value="yes"' . $consent . ' />
							<label class="form-check-label" for="wp-comment-cookies-consent">' . esc_html__('Save my name, email, and website in this browser for the next time I comment.', 'connect-drive') . '</label>
						</p>',
        );

        $defaults = array(
            'fields'               => apply_filters('comment_form_default_fields', $fields),
            'comment_field'        => '<div class="form-floating comments mb-3">
                                            <label class="form-label" for="comment">' . esc_html__('Comment', 'connect-drive') . '</label>
											<textarea id="comment" name="comment" class="form-control textarea" cols="30" rows="10" aria-required="true" placeholder="' . esc_attr__('Describe your commect', 'connect-drive') . ($req ? '' : '') . '"></textarea>
										</div>',
            /** This filter is documented in wp-includes/link-template.php */
            'must_log_in'          => '<p class="must-log-in">' . sprintf(wp_kses_post(__('You must be <a href="%s">logged in</a> to post a comment.', 'connect-drive')), wp_login_url(apply_filters('the_permalink', get_the_permalink(get_the_ID())))) . '</p>',
            /** This filter is documented in wp-includes/link-template.php */
            'logged_in_as'         => '<p class="logged-in-as">' . sprintf(wp_kses_post(__('Logged in as <a href="%1$s">%2$s</a>. <a href="%3$s" title="Log out of this account">Log out?</a>', 'connect-drive')), get_edit_user_link(), $user->display_name, wp_logout_url(apply_filters('the_permalink', get_the_permalink(get_the_ID())))) . '</p>',
            'comment_notes_before' => '<p class="small comment-notes">' . esc_html__('Your Email address will not be published.', 'connect-drive') . '</p>',
            'comment_notes_after'  => '',
            'id_form'              => 'commentform',
            'id_submit'            => 'submit',
            'class_submit'         => 'btn btn-primary',
            'name_submit'          => 'submit',
            'title_reply'          => '',
            'title_reply_to'       => esc_html__('Leave a Reply to %s', 'connect-drive'),
            'cancel_reply_link'    => esc_html__('Cancel reply', 'connect-drive'),
            'label_submit'         => esc_html__('Post Comment', 'connect-drive'),
            'submit_button'        => '<input type="submit" id="%2$s" name="%1$s" class="%3$s" value="%4$s" />',
            'submit_field'         => '<div class="form-submit">%1$s %2$s</div>',
            'format'               => 'html5',
        );

        return $defaults;
    }

    add_filter('comment_form_defaults', 'connect_drive_custom_commentform');

endif;
