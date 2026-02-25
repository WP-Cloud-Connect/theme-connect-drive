<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sl_theme_option_submenu_register')) {
    function sl_theme_option_submenu_register()
    {
        add_submenu_page(
            'themes.php',
            __('Theme Option', 'softlab'),
            __('Theme Option', 'softlab'),
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
    //integrate Google Drive settings area
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
}

add_action('admin_init', 'sl_theme_option_custom_settings_init');

function theme_option_callback()
{ ?>
    <div class="wrap">
        <h2>Theme Options</h2>
        <form method="post" action="options.php">
            <!-- integrate google drive shortcode area -->
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header"><?php _e('Integrate Google Drive', 'softlab') ?>
                    </h2>
                    <div id="panelsStayOpen-collapsetwo" class="a show" >
                        <div class="accordion-body">

                            <?php settings_fields('sl-theme-option-custom-settings-group'); ?>
                            <?php do_settings_sections('sl-custom-submenu') ?>

                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <div id="collapseTw" class=" show">
                                        <div class="accordion-body">
                                            <div class="form-table">
                                                <!---File Browser--->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('File Browser', 'softlab') ?></label>
                                                    <div class="styles">
                                                        <!-- <label class="heading_lable" for=""><?php _e('File Browser', 'softlab') ?></label> -->

                                                        <input class="input_field" type="text" name="file_browser_shortcode" value="<?php echo esc_attr(get_option('file_browser_shortcode')) ?>" />
                                                    </div>
                                                </div>
                                                <!--File Uploader-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('File Uploader', 'softlab') ?></label>
                                                    <div class="styles">
                                                        <!-- <label class="heading_lable" for=""><?php _e('File Uploader', 'softlab') ?></label> -->

                                                        <input class="input_field" type="text" name="file_uploader_shortcode" value="<?php echo esc_attr(get_option('file_uploader_shortcode')) ?>" />
                                                    </div>
                                                </div>
                                                <!--Gallery-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('Gallery', 'softlab') ?></label>
                                                    <div class="styles">
                                                        <!-- <label class="heading_lable" for=""><?php _e('Gallery', 'softlab') ?></label> -->

                                                        <input class="input_field" type="text" name="gallery_shortcode" value="<?php echo esc_attr(get_option('gallery_shortcode')) ?>" />
                                                    </div>
                                                </div>
                                                <!--Slider Carousel-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('Slider Carousel', 'softlab') ?></label>
                                                    <div class="styles">
                                                        <!-- <label class="heading_lable" for=""><?php _e('Slider Carousel', 'softlab') ?></label> -->

                                                        <input class="input_field" type="text" name="slider_carousel_shortcode" value="<?php echo esc_attr(get_option('slider_carousel_shortcode')) ?>" />
                                                    </div>
                                                </div>
                                                <!--Media Player-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('Media Player', 'softlab') ?></label>
                                                    <div class="styles">

                                                        <!-- <label class="heading_lable" for=""><?php _e('Media Player', 'softlab') ?></label> -->

                                                        <input class="input_field" type="text" name="media_player_shortcode" value="<?php echo esc_attr(get_option('media_player_shortcode')) ?>" />

                                                    </div>
                                                </div>
                                                <!--Review Approve  Module-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('Review Approve Module', 'softlab') ?></label>
                                                    <div class="styles">

                                                        <input class="input_field" type="text" name="review_approve_shortcode" value="<?php echo esc_attr(get_option('review_approve_shortcode')) ?>" />

                                                    </div>
                                                </div>
                                                <!--List Files-->
                                                <div class="skins">
                                                    <label class="heading_lable" for=""><?php _e('List Files Module', 'softlab') ?></label>
                                                    <div class="styles">

                                                        <input class="input_field" type="text" name="list_files_shortcode" value="<?php echo esc_attr(get_option('list_files_shortcode')) ?>" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="accordion" >
                <div class="accordion-item">
                    <div id="collapseThree" class=" show">
                        <div class="accordion-body">
                            <?php submit_button("Update");
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    </div>
<?php }

// Sanitization callback function
function sanitize_callback($input)
{
    return $input;
}
