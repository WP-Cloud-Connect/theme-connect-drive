<?php
/**
 * The template for displaying content in the single.php template.
 *
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <header class="title-header">
        <div class="container">
            <div class="row">
                <div class="">
                    <div class="header-content text-center">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="container">
        <div class="row">
            <div class="">

				<?php
				if ( has_post_thumbnail() ) {
					echo '<div class="post-thumbnail">' . get_the_post_thumbnail( get_the_ID(), 'large' ) . '</div>';
				}
				?>

                <div class="entry-content">
					<?php

					the_content();

					wp_link_pages( array(
						'before' => '<div class="page-link"><span>' . esc_html__( 'Pages:', 'connect-drive' ) . '</span>',
						'after'  => '</div>'
					) );
					?>
                </div>

				<?php

				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

				?>

            </div>
            
			<?php
			edit_post_link( __( 'Edit', 'connect-drive' ), '<span class="edit-link">', '</span>' );
			?>
        </div>
    </div>

</article>
