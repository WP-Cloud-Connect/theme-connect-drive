<section id="list-files-demo-hero">
    <div class="container">
        <div class="list-files-demo__head text-center">
            <h2 class="list-files-demo__head-title">List Files</h2>
            <p class="list-files-demo__head-description">Showcase your Google Drive files in a neat, organized list layout. The List Module lets users view, download, or edit files (depending on permissions) directly from your website.</p>
        </div>

        <div class="list-files-demo-header text-center">
            <?php
            if (!empty(get_option('list_files_shortcode'))) {
                echo do_shortcode(get_option('list_files_shortcode'));
            }else {
                        echo "No Shortcode Found!";
                    }
            ?>

        </div>

    </div>
</section>