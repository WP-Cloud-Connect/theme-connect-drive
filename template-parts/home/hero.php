<section class="hero-area">
    <div class="container">
        <div class="main-hero flex align-center">

            <div class="hero-content">
                <h1 class="hedding-title">
                    <?php _e('All-in-One Connect Drive Integration for WordPress', 'softlab') ?>
                </h1>


                <?php if (wp_is_mobile()) { ?>
                    <div class="hero-image-mobile text-center mb-5">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-new1.png" alt="" class="img-fluid w-75 w-md-100 autoRatio">
                        <div class="hero-img-rocket">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-rocket.png" alt="" class="img-fluid w-35 autoRatio">
                        </div>
                    </div>
                <?php } ?>

                <p class="hedding-description">
                    <?php _e('Connect Drive is a cutting-edge plugin that enables you to access your essential Connect Drive files and folders directly from your WordPress website. Designed for users with no coding experience, this plugin allows you to easily browse, manage, embed, display, upload, download, search, play, and share your Connect Drive content seamlessly on your WordPress site.', 'softlab'); ?>
                </p>
                <div class="button-area">
                    <a href="#" class="btn btn-primary "> <?php _e('Get Started', 'softlab'); ?> </a>
                    <a href="#" class="free-btn-primary "> <?php _e('Try For Free', 'softlab'); ?> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="url(#paint0_linear_60_639)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_60_639" x1="15.75" y1="13.3413" x2="2.06413" y2="5.29946" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0070FF" />
                                    <stop offset="1" stop-color="#2D7CFF" />
                                </linearGradient>
                            </defs>
                        </svg></a>
                </div>
            </div>

            <div class="hero-image text-center text-md-end mt-5 mt-md-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/hero-image-1.png" alt="" class="img-fluid w-75 w-md-100">
                <div class="hero-how-butt ripple">
                    <a class="my-btn-primary" href="https://www.youtube.com/embed/6DrYur4KGLA?si=f9GFhgplgivy0gag" data-lity>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="29" viewBox="0 0 23 29" fill="none">
                            <path d="M21.5466 15.9072C22.7328 15.1136 22.7298 13.3686 21.541 12.579L3.10656 0.334762C1.77723 -0.548189 0 0.420111 0 2.01596C0 19.7249 0 12.9512 0 26.5645C0 28.1634 1.78335 29.1314 3.11223 28.2422L21.5466 15.9072Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>