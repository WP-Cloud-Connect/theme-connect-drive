<?php

$features = [
	[
		'title'       => 'Optimize Your Gallery',
		'description' => 'Easily customize and organize your Google Drive file gallery with flexible layout options, then showcase it on your website for a smooth and engaging visual experience.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/photo-demo/optimized.png",
		'features'    => ['Galleries in the Cloud', 'Increase Loading Performance', 'Inline Preview Galleries', 'Automatically Set Thumbnails'],
	],
	[
		'title'       => 'Awesome Looking Masonry Grid',
		'description' => 'You can display your Google Drive files in a visually appealing masonry-style layout, giving your cloud content a clean and dynamic look.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/photo-demo/masonry-grid.png",
		'features'    => ['Control the Grid Size', 'Available Horizontal Space', 'Automatically Place File', 'Auto Row Height Setup '],
	],
	[
		'title'       => 'Inline Lightbox File Preview',
		'description' => 'Display your Google Drive files in a visually striking masonry-style layout, creating an organized and dynamic view of your cloud content.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/photo-demo/lightbox.png",
		'features'    => ['Lightbox Preview', 'Auto Folder Thumbnails', 'Responsive View', 'Different Lightbox Skins'],
	],
	[
		'title'       => 'Photoproofing',
		'description' => 'Allow clients to review, select, and submit their favorite photos directly from the gallery. The Gallery Module’s built-in proofing feature streamlines approvals and removes the need for endless email exchanges.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/photo-demo/photoproofing.png",
		'features'    => ['Clients can select photos for approval', 'One-click submission from the gallery', 'Works seamlessly with connect Drive images', 'Ideal for photographers, designers, and agencies', 'Integrated with review and tagging workflow'],
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

				<div class="feature-item-img d-flex <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
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