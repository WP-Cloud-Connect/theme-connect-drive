<section id="browser-demo">
    <div class="container">
        <div class="browser-demo__head text-center">
            <h2 class="browser-demo__head-title">Search Box</h2>
            <p class="browser-demo__head-description">Powerful Search Box module that instantly finds Google Drive files with smart filters, fast results, password protection, and full design customization.</p>
        </div>

        <div class="file-browser-demo text-center">
            <?php
            if (!empty(get_option('search_box_shortcode'))) {
                echo do_shortcode(get_option('search_box_shortcode'));
            } else {
                echo "No Shortcode Found!";
            }
            ?>

        </div>
    </div>
</section>