<section id="browser-demo">
    <div class="container">
        <div class="browser-demo__head text-center">
            <h2 class="browser-demo__head-title">Embed Documents</h2>
            <p class="browser-demo__head-description">Easily embed Google Drive documents directly on your site, allowing users to view or interact with files without leaving the page.</p>
        </div>

        <div class="file-browser-demo text-center">
            <?php
            if (!empty(get_option('embed_documents_shortcode'))) {
                echo do_shortcode(get_option('embed_documents_shortcode'));
            } else {
                echo "No Shortcode Found!";
            }
            ?>

        </div>
    </div>
</section>