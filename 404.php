<?php

get_header();

?>
<section id="error-page">
    <div class="container">

        <div class="error-content">
            <div class="featuer-item-img text-center">
                <img class="img-fluid"
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/404-shape.png"
                    alt="file-browser-img">
            </div>
            <div class="error-head text-center">
                <span>Page Not Found</span>
                <p>Sorry, the page you’re looking for does not exist or has been moved please go back to the Home page</p>
            </div>
            <div class="error-but text-center">
                <a href="<?php echo home_url(); ?>">Go to home</a>
            </div>
        </div>

    </div>
</section>
<?php
get_footer();
