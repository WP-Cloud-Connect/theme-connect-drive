<section id="slider-carousel-demo">
    <div class="container">
        <div class="slider-carousel-demo__head text-center">
            <h2 class="slider-carousel-demo__head-title">Slider Carousel</h2>
            <p class="slider-carousel-demo__head-description">Showcase multiple Google Drive files in an interactive slider carousel, allowing users to scroll through documents, images, or media smoothly on any device.</p>
        </div>

        <div class="demo-header-bg text-center">
            <?php
            if (!empty(get_option('slider_carousel_shortcode'))) {
                echo do_shortcode(get_option('slider_carousel_shortcode'));
            }else {
                        echo "No Shortcode Found!";
                    }
            ?>
        </div>

    </div>
</section>