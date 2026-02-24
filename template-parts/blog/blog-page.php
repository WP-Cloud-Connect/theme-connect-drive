<section id="blog-page">
    <div class="container">
        <div class="blog-layout">
            <!-- Main Content Area -->
            <div class="main-content">
                <!-- Our Articles Section -->
                <div class="our-articles-section">
                    <div class="section-head flex justify-between items-center">
                        <h2 class="section-title">Our Articles</h2>
                        <!-- Search Area -->
                        <div class="search-area">
                            <div class="search_containers">
                                <form role="search" method="get" class="search-forms" action="<?php echo esc_url(home_url('/')); ?>">
                                    <div class="search-boxs">
                                        <input type="text" class="search-fields" placeholder="Search your blog"
                                            value="<?php echo get_search_query(); ?>" name="s" required />
                                        <input type="hidden" name="post_type" value="post">
                                        <button type="submit" class="fm-search-btns">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                <path d="M13.67 13.67L19.7773 19.25M15.861 8.331C15.861 12.518 12.478 15.912 8.306 15.912C4.133 15.912 0.75 12.518 0.75 8.332C0.75 4.143 4.133 0.75 8.305 0.75C12.478 0.75 15.861 4.144 15.861 8.331Z" stroke="url(#paint0_linear_418_1505)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_418_1505" x1="1.48714" y1="0.75" x2="20.1306" y2="18.0233" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#EFEEFF" />
                                                        <stop offset="0.5543" stop-color="white" />
                                                        <stop offset="1" stop-color="#F7EDFE" />
                                                    </linearGradient>
                                                </defs>
                                            </svg> search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="articles-grid-main">
                        <div class="articles-grid">
                            <?php

                            $articles_args = array(
                                'post_type'      => 'post',
                                'posts_per_page' => 1,
                                'post_status'    => 'publish'
                            );

                            $articles_query = new WP_Query($articles_args);

                            if ($articles_query->have_posts()) :
                                while ($articles_query->have_posts()) : $articles_query->the_post();
                            ?>
                                    <div class="article-item">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <div class="article-image">
                                                <a href="<?php the_permalink(); ?>">
                                                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                                                </a>
                                            </div>
                                        <?php endif; ?>

                                        <div class="article-content">
                                            <div class="time-date flex justify-between items-center">
                                                <span class="blog-item-meta-time"><i class="fa-solid fa-clock"></i><?php echo softlab_get_reading_time(); ?></span>
                                                <span class="blog-item-meta-date">
                                                    <i class="fas fa-calendar-alt"></i>
                                                    <?php echo display_update_date(); ?>
                                                </span>
                                            </div>
                                            <h3 class="article-title">
                                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                            </h3>
                                            <p class="article-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                            <a href="<?php the_permalink(); ?>" class="read-more-link">Read more
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4.65625 4C7.09 4 9.52375 4 12.0312 4C12.0312 6.42344 12.0312 8.84688 12.0312 11.3438C11.5775 11.3438 11.1238 11.3438 10.6562 11.3438C10.6459 9.70406 10.6356 8.06437 10.625 6.375C8.75844 8.24156 6.89188 10.1081 4.96875 12.0312C4.86882 11.9813 4.82298 11.9558 4.74924 11.8813C4.73173 11.8638 4.71422 11.8463 4.69618 11.8283C4.67769 11.8094 4.65919 11.7906 4.64014 11.7712C4.62089 11.7519 4.60165 11.7326 4.58182 11.7127C4.52054 11.651 4.45949 11.5892 4.39844 11.5273C4.35687 11.4855 4.31528 11.4436 4.27368 11.4017C4.17187 11.2992 4.07026 11.1965 3.96875 11.0938C4.01019 11.0019 4.05514 10.9371 4.1263 10.866C4.14591 10.8463 4.16552 10.8265 4.18572 10.8062C4.20731 10.7848 4.22889 10.7634 4.25113 10.7414C4.27402 10.7184 4.29692 10.6955 4.32051 10.6718C4.39747 10.5948 4.47465 10.5179 4.55183 10.4411C4.60697 10.386 4.66209 10.3308 4.71719 10.2757C4.83597 10.1569 4.95484 10.0382 5.0738 9.91959C5.24579 9.74811 5.41761 9.57645 5.58939 9.40475C5.8681 9.12618 6.14694 8.84775 6.42587 8.56941C6.69683 8.29903 6.96772 8.02858 7.23853 7.75804C7.26382 7.73277 7.26382 7.73277 7.28962 7.70699C7.4215 7.57525 7.55337 7.4435 7.68524 7.31175C8.33162 6.66596 8.97833 6.0205 9.625 5.375C7.98531 5.36469 6.34562 5.35438 4.65625 5.34375C4.65625 4.90031 4.65625 4.45687 4.65625 4Z" fill="#0F172A" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            <?php
                                endwhile;
                                wp_reset_postdata();
                            endif;
                            ?>


                        </div>
                        <!-- Most Popular Section -->
                        <div class="most-popular-section">
                            <?php
                            $popular_args = array(
                                'post_type'      => 'post',
                                'posts_per_page' => 2,
                                'post_status'    => 'publish',
                                'orderby'        => 'comment_count',
                                'order'          => 'DESC'
                            );

                            $popular_query = new WP_Query($popular_args);

                            if ($popular_query->have_posts()) :
                                while ($popular_query->have_posts()) : $popular_query->the_post();
                            ?>
                                    <div class="popular-item">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <div class="popular-item-image">
                                                <a href="<?php the_permalink(); ?>">
                                                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                                                </a>
                                            </div>
                                        <?php endif; ?>

                                        <div class="popular-item-content">
                                            <div class="time-date flex justify-between items-center">
                                                <span class="blog-item-meta-time"><i class="fa-solid fa-clock"></i><?php echo softlab_get_reading_time(); ?></span>
                                                <span class="blog-item-meta-date">
                                                    <i class="fas fa-calendar-alt"></i>
                                                    <?php echo display_update_date(); ?>
                                                </span>
                                            </div>
                                            <h5 class="popular-item-title">
                                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                            </h5>
                                            <p class="article-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                            <a href="<?php the_permalink(); ?>" class="read-more-link">Read more
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4.65625 4C7.09 4 9.52375 4 12.0312 4C12.0312 6.42344 12.0312 8.84688 12.0312 11.3438C11.5775 11.3438 11.1238 11.3438 10.6562 11.3438C10.6459 9.70406 10.6356 8.06437 10.625 6.375C8.75844 8.24156 6.89188 10.1081 4.96875 12.0312C4.86882 11.9813 4.82298 11.9558 4.74924 11.8813C4.73173 11.8638 4.71422 11.8463 4.69618 11.8283C4.67769 11.8094 4.65919 11.7906 4.64014 11.7712C4.62089 11.7519 4.60165 11.7326 4.58182 11.7127C4.52054 11.651 4.45949 11.5892 4.39844 11.5273C4.35687 11.4855 4.31528 11.4436 4.27368 11.4017C4.17187 11.2992 4.07026 11.1965 3.96875 11.0938C4.01019 11.0019 4.05514 10.9371 4.1263 10.866C4.14591 10.8463 4.16552 10.8265 4.18572 10.8062C4.20731 10.7848 4.22889 10.7634 4.25113 10.7414C4.27402 10.7184 4.29692 10.6955 4.32051 10.6718C4.39747 10.5948 4.47465 10.5179 4.55183 10.4411C4.60697 10.386 4.66209 10.3308 4.71719 10.2757C4.83597 10.1569 4.95484 10.0382 5.0738 9.91959C5.24579 9.74811 5.41761 9.57645 5.58939 9.40475C5.8681 9.12618 6.14694 8.84775 6.42587 8.56941C6.69683 8.29903 6.96772 8.02858 7.23853 7.75804C7.26382 7.73277 7.26382 7.73277 7.28962 7.70699C7.4215 7.57525 7.55337 7.4435 7.68524 7.31175C8.33162 6.66596 8.97833 6.0205 9.625 5.375C7.98531 5.36469 6.34562 5.35438 4.65625 5.34375C4.65625 4.90031 4.65625 4.45687 4.65625 4Z" fill="#0F172A" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                            <?php
                                endwhile;
                                wp_reset_postdata();
                            endif;
                            ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="letest-post">

                <!-- Latest Blog Section -->
                <div class="latest-blog-section">
                    <h2 class="section-title">Latest Blog</h2>

                    <div class="blog-grid">
                        <?php
                        $blog_args = array(
                            'post_type'      => 'post',
                            'posts_per_page' => 6,
                            'offset'         => 1,
                            'post_status'    => 'publish'
                        );

                        $blog_query = new WP_Query($blog_args);

                        if ($blog_query->have_posts()) :
                            while ($blog_query->have_posts()) : $blog_query->the_post();
                        ?>
                                <div class="blog-item">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <div class="blog-item-image">
                                            <a href="<?php the_permalink(); ?>">
                                                <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                                            </a>
                                        </div>
                                    <?php endif; ?>

                                    <div class="blog-item-content">
                                        <div class="time-date flex justify-between items-center">
                                            <span class="blog-item-meta-time"><i class="fa-solid fa-clock"></i><?php echo softlab_get_reading_time(); ?></span>
                                            <span class="blog-item-meta-date">
                                                <i class="fas fa-calendar-alt"></i>
                                                <?php echo display_update_date(); ?>
                                            </span>
                                        </div>
                                        <h3 class="blog-item-title">
                                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                        </h3>
                                        <p class="blog-item-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                        <a href="<?php the_permalink(); ?>" class="read-more-link">Read more
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M4.65625 4C7.09 4 9.52375 4 12.0312 4C12.0312 6.42344 12.0312 8.84688 12.0312 11.3438C11.5775 11.3438 11.1238 11.3438 10.6562 11.3438C10.6459 9.70406 10.6356 8.06437 10.625 6.375C8.75844 8.24156 6.89188 10.1081 4.96875 12.0312C4.86882 11.9813 4.82298 11.9558 4.74924 11.8813C4.73173 11.8638 4.71422 11.8463 4.69618 11.8283C4.67769 11.8094 4.65919 11.7906 4.64014 11.7712C4.62089 11.7519 4.60165 11.7326 4.58182 11.7127C4.52054 11.651 4.45949 11.5892 4.39844 11.5273C4.35687 11.4855 4.31528 11.4436 4.27368 11.4017C4.17187 11.2992 4.07026 11.1965 3.96875 11.0938C4.01019 11.0019 4.05514 10.9371 4.1263 10.866C4.14591 10.8463 4.16552 10.8265 4.18572 10.8062C4.20731 10.7848 4.22889 10.7634 4.25113 10.7414C4.27402 10.7184 4.29692 10.6955 4.32051 10.6718C4.39747 10.5948 4.47465 10.5179 4.55183 10.4411C4.60697 10.386 4.66209 10.3308 4.71719 10.2757C4.83597 10.1569 4.95484 10.0382 5.0738 9.91959C5.24579 9.74811 5.41761 9.57645 5.58939 9.40475C5.8681 9.12618 6.14694 8.84775 6.42587 8.56941C6.69683 8.29903 6.96772 8.02858 7.23853 7.75804C7.26382 7.73277 7.26382 7.73277 7.28962 7.70699C7.4215 7.57525 7.55337 7.4435 7.68524 7.31175C8.33162 6.66596 8.97833 6.0205 9.625 5.375C7.98531 5.36469 6.34562 5.35438 4.65625 5.34375C4.65625 4.90031 4.65625 4.45687 4.65625 4Z" fill="#0F172A" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                        <?php
                            endwhile;
                            wp_reset_postdata();
                        endif;
                        ?>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="posts-pagination">
                    <?php
                    $big = 999999999;
                    $total_posts = wp_count_posts()->publish;
                    $total_pages = ceil($total_posts / 6);

                    echo paginate_links(array(
                        'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                        'format'    => '?paged=%#%',
                        'current'   => max(1, get_query_var('paged')),
                        'total'     => $total_pages,
                        'prev_text' => '&larr; Previous',
                        'next_text' => 'Next &rarr;',
                    ));
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>