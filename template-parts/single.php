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
						<span class="blog-item-meta-date flex items-center justify-center g-10">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M3.0918 9.40427H20.9157" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M16.4429 13.3097H16.4522" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M12.0054 13.3097H12.0147" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M7.55818 13.3097H7.56744" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M16.4429 17.1962H16.4522" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M12.0054 17.1962H12.0147" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M7.55818 17.1962H7.56744" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M16.0433 2V5.29078" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M7.96515 2V5.29078" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z" stroke="#5C637E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<?php echo display_update_date(); ?>
						</span>
					</div>
				</div>
			</div>
		</div>
	</header>


	<div class="container">
		<div class="row">
			<div class="">

				<?php
				if (has_post_thumbnail()) {
					echo '<div class="post-thumbnail">' . get_the_post_thumbnail(get_the_ID(), 'large') . '</div>';
				}
				?>

				<div class="entry-content">
					<?php

					the_content();

					wp_link_pages(array(
						'before' => '<div class="page-link"><span>' . esc_html__('Pages:', 'connect-drive') . '</span>',
						'after'  => '</div>'
					));
					?>
				</div>

				<?php

				if (comments_open() || get_comments_number()) {
					comments_template();
				}

				?>

			</div>

			<?php
			edit_post_link(__('Edit', 'connect-drive'), '<span class="edit-link">', '</span>');
			?>
		</div>
	</div>

</article>