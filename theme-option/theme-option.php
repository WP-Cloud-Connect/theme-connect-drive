<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sl_theme_option_submenu_register')) {
    function sl_theme_option_submenu_register()
    {
        add_submenu_page(
            'themes.php',
            __('Theme Option', 'connect-drive'),
            __('Theme Option', 'connect-drive'),
            'manage_options',
            'theme-option',
            'theme_option_callback'
        );
    }

    add_action('admin_menu', 'sl_theme_option_submenu_register');
}

/**
 * Summary of sl_theme_option_custom_settings_init
 * @return void
 */
function sl_theme_option_custom_settings_init()
{
    //Connect Drive settings area
    register_setting(
        'sl-theme-option-custom-settings-group',
        'file_browser_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'file_uploader_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'gallery_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'slider_carousel_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'media_player_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'review_approve_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'list_files_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'search_box_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'embed_documents_shortcode',
    );
}

add_action('admin_init', 'sl_theme_option_custom_settings_init');

function theme_option_callback()
{ ?>
    <div class="connect-drive-shortcode-wrap">
        <!-- <h2 class="cannect-drive-wrap__title">Theme Options</h2> -->
        <form method="post" action="options.php">
            <!-- Connect drive shortcode area -->
            <div class="connect-drive-shortcode-wrapper">
                <div class="cannect-drive-wrapper__main">
                    <h2 class="cannect-drive-head__title">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/connect-drive.png" alt="" class="img-fluid w-75 w-md-100">
                        <?php _e('<span>Connect Drive </span> Shortcode Area', 'connect-drive') ?> 
                    </h2>
                    <div id="connect-drive-shortcode-wrapper__item" class="connect-drive-shortcode-wrapper__item">
                            <?php settings_fields('sl-theme-option-custom-settings-group'); ?>
                            <?php do_settings_sections('sl-custom-submenu') ?>
                            <div class="connect-drive-form__table">
                                <!---File Browser--->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('File Browser', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="file_browser_shortcode" value="<?php echo esc_attr(get_option('file_browser_shortcode')) ?>" />
                                    </div>
                                </div>
                                <!--File Uploader-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('File Uploader', 'connect-drive') ?></label>
                                    <div class="shortcode_input">
                                        <input class="input_field" type="text" name="file_uploader_shortcode" value="<?php echo esc_attr(get_option('file_uploader_shortcode')) ?>" />
                                    </div>
                                </div>
                                <!--Gallery-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Gallery', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="gallery_shortcode" value="<?php echo esc_attr(get_option('gallery_shortcode')) ?>" />
                                    </div>
                                </div>
                                <!--Slider Carousel-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Slider Carousel', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="slider_carousel_shortcode" value="<?php echo esc_attr(get_option('slider_carousel_shortcode')) ?>" />
                                    </div>
                                </div>
                                <!--Media Player-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Media Player', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="media_player_shortcode" value="<?php echo esc_attr(get_option('media_player_shortcode')) ?>" />

                                    </div>
                                </div>
                                <!--Review Approve  Module-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Review Approve Module', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="review_approve_shortcode" value="<?php echo esc_attr(get_option('review_approve_shortcode')) ?>" />

                                    </div>
                                </div>
                                <!--List Files-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('List Files Module', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="list_files_shortcode" value="<?php echo esc_attr(get_option('list_files_shortcode')) ?>" />

                                    </div>
                                </div>
                                <!--Search Box-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Search Box Module', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="search_box_shortcode" value="<?php echo esc_attr(get_option('search_box_shortcode')) ?>" />

                                    </div>
                                </div>
                                <!--Embed Documents-->
                                <div class="shortcode-area">
                                    <label class="shortcode_lable" for=""><?php _e('Embed Documents Module', 'connect-drive') ?></label>
                                    <div class="shortcode_input">

                                        <input class="input_field" type="text" name="embed_documents_shortcode" value="<?php echo esc_attr(get_option('embed_documents_shortcode')) ?>" />

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

            <div class="connect-drive-submit">
                <?php submit_button("Update");
                ?>
            </div>
        </form>


    </div>
<?php }

// Sanitization callback function
function sanitize_callback($input)
{
    return $input;
}
