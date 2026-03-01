<section id="slider-carousel-demo">
    <div class="container">
        <div class="slider-carousel-demo__head text-center">
            <h2 class="slider-carousel-demo__head-title">Slider Carousel</h2>
            <p class="slider-carousel-demo__head-description">The Slider Carousel feature in our Google Drive plugin lets you create a slideshow of images or videos from your Google Drive. You can customize it with autoplay and navigation buttons to make your content more engaging and visually appealing.</p>
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