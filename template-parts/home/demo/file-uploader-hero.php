<section class="file-uploader-demo-hero">
    <div class="container">

        <div class="uploader-demo__head text-center">
            <h2 class="uploader-demo__head-title">File Uploader</h2>
            <p class="uploader-demo__head-description">You and your visitors can easily upload files directly to your Google Drive account right from your website, making file sharing and storage seamless.</p>
        </div>

        <div class="file-uploader-demo text-center">
            <?php
            if (!empty(get_option('file_uploader_shortcode'))) {
                echo do_shortcode(get_option('file_uploader_shortcode'));
            }else {
                        echo "No Shortcode Found!";
                    }
            ?>

        </div>

    </div>
</section>