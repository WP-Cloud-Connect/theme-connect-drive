<section id="media-demo">
    <div class="container">
                <div class="media-demo__head text-center">
                    <h2 class="media-demo__head-title">Media Player</h2>
                    <p class="media-demo__head-description">Easily play your Google Drive audio and video files on your website using a single playlist. Both audio and video files can be streamed seamlessly in one unified player.</p>
                </div>

                <div class="media-demo-header text-center">
                    <?php
                    if (!empty(get_option('media_player_shortcode'))) {
                        echo do_shortcode(get_option('media_player_shortcode'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>
                </div>

    </div>
</section>