<section id="review-approve-demo">
    <div class="container">
                <div class="review-approve-demo__head text-center">
                    <h2 class="review-approve-demo__head-title">Review & Approve Module</h2>
                    <p class="review-approve-demo__head-description">Let users review and submit their selected files for approval with ease. Admins can efficiently manage, review, and take action on all submissions directly from the WordPress dashboard.</p>
                </div>

                <div class="review-approve-demo-header text-center">
                    <?php
                    if (!empty(get_option('review_approve_shortcode'))) {
                        echo do_shortcode(get_option('review_approve_shortcode'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>

        </div>

    </div>
</section>