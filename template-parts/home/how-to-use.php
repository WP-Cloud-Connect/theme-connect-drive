<?php
$howtouses = [

    'download-install' => [
        'title'       => 'Download & Install',
        'description' => 'Download the plugin from WordPress repository and install it via admin dashboard',
    ],
    'link-google-account' => [
        'title'       => 'Connect Google Account',
        'description' => 'After activating the plugin, link your Google account to access Google Drive files',
    ],
    'manage-browse-files' => [
        'title'       => 'Manage & Browse Files',
        'description' => 'Plugin\'s File Browser manages files efficiently. You can copy, edit, rename, and delete files directly without leaving WordPress',
    ],
    'shortcode-builder' => [
        'title'       => 'Module Builder',
        'description' => 'Create various modules using the Module builder, and place them anywhere with the Shortcode',
    ],
    'share-files' => [
        'title'       => 'Share Files',
        'description' => 'Share Files: Easily share files on any page or post using the module you’ve created',
    ],
    'explore-enjoy-features' => [
        'title'       => 'Explore and Enjoy Features',
        'description' => 'Enjoy fast uploads, real-time syncing, and direct Drive access from your WordPress dashboard',
    ],

];

$how_to_use_heading = 'Let\'s learn how to use</br> <span>Connect Drive</span>';
$how_to_use_description = 'Enhance your productivity by installing the Connect Drive plugin. Follow our straightforward, step-by-step guide below to learn how to use it effectively.';
?>





<section id="connect-drive__how-to-use">
    <div class="container">
        <div class="how-to-use__head text-center">
            <h3 class="how-to-use__title"><?php echo $how_to_use_heading; ?></h3>
            <p class="how-to-use__description"><?php echo $how_to_use_description; ?></p>
        </div>


        <div class="row justify-center">
            <?php foreach ($howtouses as $key => $howtouse) { ?>

                <div class="how-to-use__item flex align-center  how-to-use__<?php echo $key; ?>">
                    <div class="use-img">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/how-to-use//<?php echo $key; ?>-icons.png" alt="<?php echo $howtouse['title']; ?>">
                    </div>
                    <div class="how-to-use__item-text">
                        <h4 class="how-to-use__item-title"><?php echo $howtouse['title']; ?></h4>
                        <p class="how-to-use__item-description"><?php echo $howtouse['description']; ?></p>
                    </div>
                </div>
            <?php } ?>
        </div>

    </div>
</section>