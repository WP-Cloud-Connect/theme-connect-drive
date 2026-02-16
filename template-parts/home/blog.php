<section id="our-blog">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="our-blog-head  text-center">
                    <h4 class="sub-hedding-title"><?php _e('Latest Blog & News', 'softlab'); ?></h4>
                    <p class="sub-hedding-description"><?php _e('Read the latest updates about us, which new Features coming to help your website.', 'softlab'); ?></p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

            $args = array(
                'post_type'      => 'post',
                'posts_per_page' => 3,
                'paged'          => $paged
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) {
                while ($query->have_posts()) {
                    $query->the_post();
            ?>
                    <div class="col-lg-4 col-md-6 col-sm-9 m-auto">
                        <div class="our-blog-main ">
                            <div class="our-blog-item">


                                <div class="our-blog-img text-center">
                                    <a href="<?php the_permalink(); ?>">
                                        <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
                                    </a>
                                </div>
                                <div class="bolg-item">
                                    <div class="our-blog-content d-flex d-flex justify-content-between align-items-center">
                                        <span class="blog-item-meta-category">
                                            
                                            <?php
                                            
                                            $categories = get_the_category();

                                            if ($categories) {
                                                foreach ($categories as $category) {
                                                    echo '<a href="' . get_category_link($category->term_id) . '"> <i class="fa-solid fa-tag"></i>' . $category->name . '</a>';
                                                }
                                            }
                                            ?>
                                        </span>
                                        <span class="blog-item-meta-date">
                                            <i class="fas fa-calendar-alt"></i>
                                            <?php echo display_update_date(); ?>
                                        </span>
                                    </div>
                                    <div class="our-blog-content-item ">
                                        <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                    </div>
                                    <div class="our-blog-content-butt d-flex justify-content-between align-items-center">
                                        <span class="blog-item-meta-time"><i class="fa-solid fa-clock"></i><?php echo softlab_get_reading_time(); ?></span>
                                        <a href="<?php the_permalink(); ?>" class="read-more">
                                            <?php _e('View Post', 'softlab'); ?>
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
            <?php
                }
            }

            wp_reset_postdata();

            ?>



        </div>
    </div>
</section>