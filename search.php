<?php
/**
 * The Template for displaying Search Results pages.
 */

get_header();

if ( have_posts() ) :
?>	
	<header class="page-header">
		<h1 class="page-title" style="display:none;"><?php printf( esc_html__( 'Search Results for: %s', 'softlab' ), get_search_query() ); ?></h1>
	</header>
<?php
	get_template_part( 'archive', 'loop' );
else :
?>
<div class="search-page">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8 m-auto">
				<article id="post-0" class="post no-results not-found text-center">
					<header class="entry-header">
						<h1 class="entry-title"><?php esc_html_e( 'Nothing Found', 'softlab' ); ?></h1>
					</header><!-- /.entry-header -->
					<p><?php esc_html_e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'softlab' ); ?></p>
					<?php
						get_search_form();
					?>
				</article><!-- /#post-0 -->
			</div>
		</div>
	</div>
</div>
	
<?php
endif;
wp_reset_postdata();

get_footer();
