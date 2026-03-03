<?php

$features = [
	[
		'title'       => 'Embed files on any page',
		'description' => 'Easily embed Google Drive files anywhere on your website, letting users view documents directly on the page without downloads, improving accessibility and user engagement.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/embed-documents/embed-files.png",
		'features'    => ['Works on pages, posts, and widgets', 'Quick shortcode or page builder setup', 'Fits any layout or section', 'Ideal for portfolios or tutorials',]
	],
	[
		'title'       => 'Supports PDFs, Docs, Sheets, Slides',
		'description' => 'Display a variety of file types like PDFs, Docs, Sheets, and Slides directly on your site, giving users seamless access to important documents.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/embed-documents/supports-pdf-docs.png",
		'features'    => [
			'Show multiple file types',
			'No extra plugins required',
			'Compatible with Google Drive formats',
			'Perfect for reports, guides',
		],
	],
];

?>

<section class="demo-details">
	<div class="container">

		<?php
		$i = 0;
		foreach ($features as $feature) {
			$is_odd        = $i % 2 == 0;
		?>

			<div class=" feature-item align-center <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

				<div class="feature-item-img flex <?php echo $is_odd ? 'justify-start' : 'justify-end'; ?>">
					<img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
				</div>
				<div class="feature-item-content">

					<h3 class="feature-title"><?php echo $feature['title']; ?></h3>
					<?php if (wp_is_mobile()) { ?>
						<div class="feature-item-img-mobile">
							<img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
						</div>
					<?php } ?>
					<p class="feature-description"><?php echo $feature['description']; ?></p>
					<div class="feature-list">
						<?php foreach ($feature['features'] as $item) { ?>
							<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg> <?php echo $item; ?></span>
						<?php } ?>
					</div>
				</div>
			</div>
		<?php
			$i++;
		} ?>
	</div>
</section>