<section id="photo-gallery-demo">
    <div class="container">
        <div class="photo-gallery-demo__head text-center">
            <h2 class="photo-gallery-demo__head-title">Gallery</h2>
            <p class="photo-gallery-demo__head-description">Easily create a grid-style lightbox photo gallery on any page or post using the plugin’s gallery options. The gallery is automatically generated from the folders you select from Google Drive.</p>
        </div>
        <div class="photo-gallery-demo-header text-center">
            <?php
            if (!empty(get_option('gallery_shortcode'))) {
                echo do_shortcode(get_option('gallery_shortcode'));
            }else {
                        echo "No Shortcode Found!";
                    }
            ?>

        </div>

    </div>
</section>