<?php

/**
 * Template Name: WooCommerce Integration Demo Page
 *
 */

get_header();
?>
<section id="browser-demo">
    <div class="container">
        <div class="browser-demo__head text-center">
            <h2 class="browser-demo__head-title">WooCommerce</h2>
            <p class="browser-demo__head-description">The Connect Drive plugin, compatible with WooCommerce, allows administrators to let users upload and download files from multiple locations across your website.</p>
        </div>
    </div>
</section>
<section id="browser-demo-img">
    <div class="container">

        <div class="demo-header-bg text-center">
            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/woocommerce/woocommerce-illustrations.png" alt="">

        </div>
    </div>
</section>
<?php

$features = [
    [
        'title'       => 'Downloadable connect Drive Products',
        'description' => 'Easily sell digital products stored in Google Drive through your WooCommerce store. Attach Google Drive files as product downloads and provide secure, instant delivery to customers after purchase.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/woocommerce/downloadable-connect-drive-products.png",
        'features'    => ['Use connect Drive files as WooCommerce downloads', 'Secure file delivery after order completion', 'Supports large files and multiple file types', 'No need to upload files to WordPress', 'Works with both simple and variable products']
    ],
    [
        'title'       => 'Google Drive Upload Field based on Order Status',
        'description' => 'Display or hide the Google Drive file upload field on the order details page according to the order status. This feature is perfect for collecting additional files from customers only under specific conditions.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/woocommerce/connect-drive-upload-field-based-on-order-status.png",
        'features'    => [
            'Pending Payment',
            'Processing',
            'On Hold',
            'Completed',
            'Cancelled',
            'Refunded',
            'Failed',
        ],
    ],
    [
        'title'       => 'Google Drive Upload Field based on Page Locations',
        'description' => 'Show the Google Drive upload field on selected pages of your site, such as product pages, checkout, thank you, or account pages. Easily control where users can upload files to fit your workflow perfectly.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/woocommerce/connect-drive-upload-field-based-on-page-locations.png",
        'features'    => [
            'Product Page',
            'Cart Page',
            'Checkout Page',
            'Order Received Page',
            'My Account Page',
        ],
    ],
];

?>

<section class="demo-details">
    <div class="container">

        <?php
        $i = 0;
        foreach ($features as $feature) {
            $is_odd        = $i % 2 == 0;
        ?>

            <div class=" feature-item align-center <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="feature-item-img flex <?php echo $is_odd ? 'justify-start' : 'justify-end'; ?>">
                    <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                </div>
                <div class="feature-item-content">

                    <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                    <?php if (wp_is_mobile()) { ?>
                        <div class="feature-item-img1">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                        </div>
                    <?php } ?>
                    <p class="feature-description"><?php echo $feature['description']; ?></p>
                    <div class="feature-list">
                        <?php foreach ($feature['features'] as $item) { ?>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> <?php echo $item; ?></span>
                        <?php } ?>
                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
    </div>
</section>

<!-- dokan support demo -->
<section id="dokan-demo">
    <div class="container">
        <div class="browser-demo__head text-center">
            <h2 class="browser-demo__head-title">Dokan</h2>
            <p class="browser-demo__head-description">Dokan compatibility lets store owners enable file uploads and downloads directly on specific product pages. It also allows Dokan vendors to efficiently manage and monitor file access within their assigned stores.</p>
        </div>
        <div class="demo-header-bg text-center">
            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/dokan/dokan-illustrations.png" alt="">

        </div>

    </div>
</section>
<?php

$features_dokans = [
    [
        'title'       => 'Downloadable Google Drive Products',
        'description' => 'Enable Dokan vendors to use their Google Drive files as downloadable products. Vendors can securely attach Drive files to their digital products and sell them effortlessly through your multi-vendor marketplace.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/dokan/downloadable-connect-drive-products.png",
        'features'    => ['Vendors can link Drive files to their products', 'Secure file delivery after purchase', 'Supports all connect Drive file types', 'Fully compatible with Dokan digital products', 'No need to upload files to WordPress']
    ],
    [
        'title'       => 'Google Drive Upload Field based on Order Status',
        'description' => 'Allow Dokan vendors to display or hide the Google Drive upload field on order details according to the order status. This ensures vendors can collect files from customers at the appropriate stage, such as after payment or during order processing.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/dokan/connect-drive-upload-field-based-on-order-status.png",
        'features'    => [
            'Pending Payment',
            'Processing',
            'On Hold',
            'Completed',
            'Cancelled',
            'Refunded',
            'Failed',
            'Draft',
        ],
    ],
    [
        'title'       => 'Google Drive Upload Field based on Page Locations',
        'description' => 'Enable Dokan vendors to display Google Drive upload fields on specific pages, including product, checkout, thank you, or account pages. This provides vendors with precise control over where and when customers can upload files during their purchase journey.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/dokan/connect-drive-upload-field-based-on-page-locations.png",
        'features'    => [
            'Product Page',
            'Cart Page',
            'Checkout Page',
            'Order Received Page',
            'My Account Page',
        ],
    ],
    [
        'title'       => 'Media Library Integration',
        'description' => 'Provide Dokan vendors with a Google Drive-connected Media Library directly in their dashboard. Vendors can easily browse, select, and reuse previously uploaded files without re-uploading, making product management faster and more efficient.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/dokan/media-library-integration.png",
        'features'    => [
            'Google Drive-powered Media Library for vendors',
            'Browse and reuse uploaded media across products',
            'Access from the Dokan vendor dashboard',
            'Supports images, audio, video, documents, and more',
            'Boosts efficiency and consistency for digital vendors',
        ],
    ],
];

?>

<section class="demo-details">
    <div class="container">

        <?php
        $i = 0;
        foreach ($features_dokans as $features_dokan) {
            $is_odd        = $i % 2 == 0;
        ?>

            <div class=" feature-item align-center <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="feature-item-img flex <?php echo $is_odd ? 'justify-start' : 'justify-end'; ?>">
                    <img class="img-fluid" src="<?php echo $features_dokan['image']; ?>" alt="File Browser">
                </div>
                <div class="feature-item-content">

                    <h3 class="feature-title"><?php echo $features_dokan['title']; ?></h3>
                    <?php if (wp_is_mobile()) { ?>
                        <div class="feature-item-img1">
                            <img class="img-fluid" src="<?php echo $features_dokan['image']; ?>" alt="File Browser">
                        </div>
                    <?php } ?>
                    <p class="feature-description"><?php echo $features_dokan['description']; ?></p>
                    <div class="feature-list">
                        <?php foreach ($features_dokan['features'] as $item) { ?>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> <?php echo $item; ?></span>
                        <?php } ?>
                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
    </div>
</section>

<?php

get_template_part('template-parts/home/cta');

?>



<?php
get_footer();
