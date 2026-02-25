<section id="photo-gallery-demo">
    <div class="container">
        <div class="photo-gallery-demo__head text-center">
            <h2 class="photo-gallery-demo__head-title">Gallery</h2>
            <p class="photo-gallery-demo__head-description">You can add a grid lightbox popup photo gallery in your page/ post using the gallery options of the plugin. The gallery will be generated based on the folders that you select.</p>
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