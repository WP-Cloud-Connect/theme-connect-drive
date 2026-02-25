<?php

/**
 * Template Name: WooCommerce Integration Demo Page
 *
 */

get_header();
?>
<section id="browser-demo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="browser-demo__head text-center">
                    <h2 class="browser-demo__head-title">WooCommerce</h2>
                    <p class="browser-demo__head-description">The Integrate Google Drive plugin with WooCommerce compatibility enables administrators to authorize users to upload and download files from various page locations.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="demo-header-bg text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/woocommerce/woocommerce-illustrations.png" alt="">

                </div>
            </div>
        </div>

    </div>
</section>
<?php

$features = [
    [
        'title'       => 'Downloadable Google Drive Products',
        'description' => 'Sell digital products stored in Google Drive directly through your WooCommerce store. Link Drive files as product downloads and deliver them securely to customers after purchase.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/woocommerce/downloadable-google-drive-products.png",
        'features'    => ['Use Google Drive files as WooCommerce downloads', 'Secure file delivery after order completion', 'Supports large files and multiple file types', 'No need to upload files to WordPress', 'Works with both simple and variable products']
    ],
    [
        'title'       => 'Google Drive Upload Field based on Order Status',
        'description' => 'Show or hide the Google Drive file upload field on the order details page based on the order status. Ideal for collecting additional files from customers only when specific conditions are met.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/woocommerce/google-drive-upload-field-based-on-order-status.png",
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
        'description' => 'Display the Google Drive upload field on specific pages of your site—like product pages, checkout, thank you, or account pages. Control exactly where users can upload files, tailored to your workflow.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/woocommerce/google-drive-upload-field-based-on-page-locations.png",
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
            $content_class = $is_odd ? 'col-lg-7 col-md-6' : 'col-lg-5 col-md-6';
            $img_class     = $is_odd ? 'col-lg-5 col-md-6' : 'col-lg-7 col-md-6';
        ?>
            <div class="row feature-item align-items-center">
                <div class="<?php echo $content_class; ?>">
                    <div class="feature-content">
                        <h3><?php echo $feature['title']; ?></h3>
                        <div class="feature-item-img-mobile">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                        </div>
                        <p><?php echo $feature['description']; ?></p>
                        <div class="feature-list">
                            <?php foreach ($feature['features'] as $item) { ?>
                                <span><i class="fa-solid fa-check"></i> <?php echo $item; ?></span>
                            <?php } ?>
                        </div>
                    </div>
                </div>

                <div class="<?php echo $img_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>

<!-- dokan support demo -->
 <section id="dokan-demo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="browser-demo__head text-center">
                    <h2 class="browser-demo__head-title">Dokan</h2>
                    <p class="browser-demo__head-description">The Dokan compatibility allows store owners to enable download & upload on the specific product page. Also, they can allow Dokan Vendors to manage & monitor their allowed store access.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="demo-header-bg text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/dokan/dokan-illustrations.png" alt="">

                </div>
            </div>
        </div>

    </div>
</section>
<?php

$features_dokan = [
    [
        'title'       => 'Downloadable Google Drive Products',
        'description' => 'Allow Dokan vendors to use their Google Drive files as downloadable products. Vendors can securely link Drive files to their digital products and sell them through your multi-vendor marketplace with ease.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/dokan/downloadable-google-drive-products.png",
        'features'    => ['Vendors can link Drive files to their products', 'Secure file delivery after purchase', 'Supports all Google Drive file types', 'Fully compatible with Dokan digital products', 'No need to upload files to WordPress']
    ],
    [
        'title'       => 'Google Drive Upload Field based on Order Status',
        'description' => 'Enable Dokan vendors to show or hide the Google Drive upload field on order details based on the order status. This helps vendors collect files from customers at the right stage, like after payment or during processing.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/dokan/google-drive-upload-field-based-on-order-status.png",
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
        'description' => 'Let Dokan vendors display Google Drive upload fields on specific pages like product, checkout, thank you, or account pages. This gives vendors control over when and where customers can upload files during their purchase journey.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/dokan/google-drive-upload-field-based-on-page-locations.png",
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
        'description' => 'Give Dokan vendors access to a powerful, Google Drive-connected Media Library right from their vendor dashboard. Vendors can browse, select, and reuse previously uploaded files without re-uploading—perfect for streamlining product management.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/dokan/media-library-integration.png",
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
        foreach ($features_dokan as $feature_dokan) {
            $is_odd        = $i % 2 == 0;
            $content_class = $is_odd ? 'col-lg-7 col-md-6' : 'col-lg-5 col-md-6';
            $img_class     = $is_odd ? 'col-lg-5 col-md-6' : 'col-lg-7 col-md-6';
        ?>
            <div class="row feature-item align-items-center">
                <div class="<?php echo $content_class; ?>">
                    <div class="feature-content">
                        <h3><?php echo $feature_dokan['title']; ?></h3>
                        <div class="feature-item-img-mobile">
                            <img class="img-fluid" src="<?php echo $feature_dokan['image']; ?>" alt="File Browser">
                        </div>
                        <p><?php echo $feature_dokan['description']; ?></p>
                        <div class="feature-list">
                            <?php foreach ($feature_dokan['features'] as $item) { ?>
                                <span><i class="fa-solid fa-check"></i> <?php echo $item; ?></span>
                            <?php } ?>
                        </div>
                    </div>
                </div>

                <div class="<?php echo $img_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid" src="<?php echo $feature_dokan['image']; ?>" alt="File Browser">
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>

<?php

get_template_part('template-parts/integrate-google-drive/home/cta');

?>



<?php
get_footer();
