<section id="browser-demo">
    <div class="container">
        <div class="browser-demo__head text-center">
            <h2 class="browser-demo__head-title">File Browser</h2>
            <p class="browser-demo__head-description">Display your cloud files through a File Browser. The File Browser supports grid thumbnail and list views and includes a file uploader for easy uploads.</p>
        </div>

        <div class="file-browser-demo text-center">
            <?php
            if (!empty(get_option('file_browser_shortcode'))) {
                echo do_shortcode(get_option('file_browser_shortcode'));
            } else {
                echo "No Shortcode Found!";
            }
            ?>

        </div>
    </div>
</section>