<?php

/**
 * The template for displaying Comments.
 */

/**
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if (post_password_required()) {
	return;
}

?>
<div id="comments">
	<?php

	if (comments_open() && ! have_comments()) {
	?>
		<h2 id="comments-title">
			<?php
			esc_html_e('No Comments yet!', 'softlab');
			?>
		</h2>
	<?php
	}

	if (have_comments()) {
	?>
		<h2 id="comments-title">
			<?php
			$comments_number = get_comments_number();
			if ('1' === $comments_number) {
				printf(_x('One Reply to &ldquo;%s&rdquo;', 'comments title', 'softlab'), get_the_title());
			} else {
				printf(
					/* translators: 1: number of comments, 2: post title */
					_nx(
						'%1$s Reply to &ldquo;%2$s&rdquo;',
						'%1$s Replies to &ldquo;%2$s&rdquo;',
						$comments_number,
						'comments title',
						'softlab'
					),
					number_format_i18n($comments_number),
					get_the_title()
				);
			}
			?>
		</h2>

		<?php
		if (get_comment_pages_count() > 1 && get_option('page_comments')) {
		?>
			<nav id="comment-nav-above">
				<h1 class="assistive-text"><?php esc_html_e('Comment navigation', 'softlab'); ?></h1>
				<div class="nav-previous"><?php previous_comments_link(__('&larr; Older Comments', 'softlab')); ?></div>
				<div class="nav-next"><?php next_comments_link(__('Newer Comments &rarr;', 'softlab')); ?></div>
			</nav>
		<?php } ?>

		<ol class="commentlist">
			<?php
			/**
			 * Loop through and list the comments. Tell wp_list_comments()
			 * to use theme_comment() to format the comments.
			 * If you want to overload this in a child theme then you can
			 * define theme_comment() and that will be used instead.
			 * See theme_comment() in my-theme/functions.php for more.
			 */
			wp_list_comments(array('callback' => function ($comment, $args, $depth) {
				$GLOBALS['comment'] = $comment;
				switch ($comment->comment_type):
					case 'pingback':
					case 'trackback':
			?>
						<li class="post pingback">
							<p><?php esc_html_e('Pingback:', 'softlab'); ?><?php comment_author_link(); ?><?php edit_comment_link(esc_html__('Edit', 'softlab'), '<span class="edit-link">', '</span>'); ?></p>
						<?php
						break;
					default:
						?>
						<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
							<article id="comment-<?php comment_ID(); ?>" class="comment">
								<footer class="comment-meta">
									<div class="comment-author vcard">
										<?php
										$avatar_size = ('0' !== $comment->comment_parent ? 68 : 136);
										echo get_avatar($comment, $avatar_size);

										/* translators: 1: comment author, 2: date and time */
										printf(
											wp_kses_post(__('%1$s, %2$s', 'softlab')),
											sprintf('<span class="fn">%s</span>', get_comment_author_link()),
											sprintf(
												'<a href="%1$s"><time datetime="%2$s">%3$s</time></a>',
												esc_url(get_comment_link($comment->comment_ID)),
												get_comment_time('c'),
												/* translators: 1: date, 2: time */
												sprintf(esc_html__('%1$s ago', 'softlab'), human_time_diff((int) get_comment_time('U'), current_time('timestamp')))
											)
										);

										edit_comment_link(esc_html__('Edit', 'softlab'), '<span class="edit-link">', '</span>');
										?>
									</div><!-- .comment-author .vcard -->

									<?php if ('0' === $comment->comment_approved) : ?>
										<em class="comment-awaiting-moderation"><?php esc_html_e('Your comment is awaiting moderation.', 'softlab'); ?></em>
										<br />
									<?php endif; ?>
								</footer>

								<div class="comment-content"><?php comment_text(); ?></div>

								<div class="reply">
									<?php
									comment_reply_link(
										array_merge(
											$args,
											array(
												'reply_text' => esc_html__('Reply', 'softlab') . ' <span>&darr;</span>',
												'depth'      => $depth,
												'max_depth'  => $args['max_depth'],
											)
										)
									);
									?>
								</div><!-- /.reply -->
							</article><!-- /#comment-## -->
				<?php
						break;
				endswitch;
			}));
				?>
		</ol>

		<?php if (get_comment_pages_count() > 1 && get_option('page_comments')) { ?>
			<nav id="comment-nav-below">
				<h1 class="assistive-text"><?php esc_html_e('Comment navigation', 'softlab'); ?></h1>
				<div class="nav-previous"><?php previous_comments_link(__('&larr; Older Comments', 'softlab')); ?></div>
				<div class="nav-next"><?php next_comments_link(__('Newer Comments &rarr;', 'softlab')); ?></div>
			</nav>
		<?php } elseif (! comments_open() && ! is_page() && post_type_supports(get_post_type(), 'comments')) { ?>
			<h2 id="comments-title" class="nocomments"><?php esc_html_e('Comments are closed.', 'softlab'); ?></h2>
	<?php
		}
	}
	?>

	<h2 id="comments-title">Leave a reply</h2>
	<?php

	// Show Comment Form (customized in functions.php).
	comment_form();
	?>
</div><!-- /#comments -->