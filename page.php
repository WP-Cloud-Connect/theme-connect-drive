<?php
/**
 * Template Name: Page (Default)
 * Description: Page template with Sidebar on the left side.
 *
 */

get_header();

?>

    <section class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
                        <h1><?php the_title(); ?></h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="row">
            <div class="col-md-10 m-auto">
                <div id="post-<?php the_ID(); ?>" <?php post_class( 'entry-content' ); ?>>
					<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . __( 'Pages:', 'softlab' ),
							'after'  => '</div>',
						)
					);
					edit_post_link( esc_html__( 'Edit', 'softlab' ), '<span class="edit-link">', '</span>' );
					?>
                </div><!-- /#post-<?php the_ID(); ?> -->

            </div><!-- /.col -->

        </div>
    </div>
<?php
get_footer();
