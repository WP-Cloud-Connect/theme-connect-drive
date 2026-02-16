<?php

$testimonials = [
	'item' => [
		'description' => __('I installed the plug in on our WordPress website and could not get it to function properly. So I contacted customer support with my issue. I got a reply in less than 24 hours and they solved my issue right away. Great communication with customer support. The plug in is working great now and it works just as I thought when I reviewed which google drive plug in we wanted for our website.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/ocwebmst.png',
		'name'        => __('ocwebmst', 'softlab'),
		'title' => '"Great and working 100%"',
	],

	'item2' => [
		'description' => __('A clean, no-fuss interface that looks great and works well for any radio station setup. We did notice a minor issue with the song title and artist not updating correctly, but this does not impact the streaming experience, and support was quick to respond and confirmed it’s being fixed in the next update. Looking forward to seeing that rolled out so we can further enhance “The Dump Radio”', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/turbo360.png',
		'name'        => __('turbo360', 'softlab'),
		'title' => '"Great and working 100%"',
	],
	'item3' => [
		'description' => __('I have been using this plug-in on my website for about a year now. It is really easy to set up and offers a lot of customization options. I opted for the premium version and feel like I’ve gotten incredible value out of it. It’s honestly one of my favorite plug-ins because everything just works! I’ve reached out to the developers a couple of times with questions and they always reply within a few hours. They are incredibly helpful and nice every time, too. I would 100% recommend this to anyone looking for an easy solution to adding dark mode to their website.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/bluedragon222222.png',
		'name'        => __('bluedragon222222', 'softlab'),
		'title' => '"Great and working 100%"',
	],

	'item4' => [
		'description' => __('Just bought this plugin as it had a feature we needed that the other plugins didn’t have by default (multiple image choice selection). Even if at the beginning there seemed to be a bug with the conditional logic field and the multiple image choice, the support team quickly came to our help and fixed the problem. Since this a new plugin, I can only imagine that it will get even better with time. I recommend this plugin – we also did a little bit of CSS/JS customization and everything was smooth.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/althausstudios.png',
		'name'        => __('althausstudios', 'softlab'),
		'title' => '"Great and working 100%"',
	],
	'item5' => [
		'description' => __('Needed Google materials cleanly integrated into my site, tried this out, saw enough in the free tier to grab pro at a fair price. Even the free functionality was pretty darn good and worth the look. Had a question and sent it off to support, they had a script fix in my hands in record time. It’s one thing to find a well developed tool right out of the box, but good, capable support on top, that’s 5 stars.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/thanatos8088.png',
		'name'        => __('thanatos8088', 'softlab'),
		'title' => '"Great and working 100%"',
	],
	'item6' => [
		'description' => __('Great quality plugin. And the developers behind it are very professional and fast to respond. There was one change I had to make to the meta data, to make it work on my site for the live stream. Engineers of this plugin responded in no time, made that change and sent me updated plugin. This alone is worth much more than even the already great quality of the player. Absolutely love it!', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/connect-drive/testimonial/wwwmaster2k.png',
		'name'        => __('wwwmaster2k', 'softlab'),
		'title' => '"Great and working 100%"',
	],

];

?>

<section id="connect-drive-testimonial" class="connect-drive-testimonial">
	<div class="container">

		<div class="section-head  text-center">
			<h4 class="sub-hedding-title"><?php _e('Loved by Businesses Like Yours!', 'softlab'); ?></h4>
			<p class="sub-hedding-description"><?php _e('See, how our users all over the world are getting benefit from using our products.', 'softlab'); ?></p>
		</div>

		<div class="row">
			<?php foreach ($testimonials as $key => $testimonial) { ?>


				<div class="slider-item test-item-<?php echo $key; ?>">
					<div class="connect-drive-testimonial-user-main">
						<span class="connect-drive-testimonial-title"><?php echo $testimonial['title']; ?></span>
					</div>
					<div class="connect-drive-testimonial-rating">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
							<path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FDD264" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
							<path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FDD264" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
							<path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FDD264" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
							<path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FDD264" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
							<path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FDD264" />
						</svg>

					</div>

					<div class="connect-drive-testimonial-content">

						<p class="connect-drive-testimonial-desc"><?php echo wp_trim_words($testimonial['description'], 34, "..."); ?></p>

						<div class="connect-drive-testimonial-user-text flex align-center">
							<img class="img-fluid " src="<?php echo $testimonial['image']; ?>" alt="">
							<span class="connect-drive-testimonial-name"><?php echo $testimonial['name']; ?></span>
						</div>
					</div>


				</div>
			<?php } ?>
		</div>

	</div>

</section>