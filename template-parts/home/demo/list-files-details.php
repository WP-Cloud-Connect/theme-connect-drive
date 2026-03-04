<?php

$features = [
	[
		'title'       => 'Showcase connect Drive Files to View, Download, or Edit',
		'description' => 'Present your Google Drive files in a clean, well-organized list layout. The List Module enables users to view, download, or edit files (depending on their permissions) directly from your website.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/list-demo/showcase-connect.png",
		'features'    => ['Clean list-style file display', 'View or download files instantly', 'Edit access based on file permissions', 'Supports all connect Drive file types', 'Ideal for documents, spreadsheets, PDFs, and more']
	],
	[
		'title'       => 'Multiple List Styles',
		'description' => 'Personalize the display of your Google Drive files with multiple list styles. Select from simple link lists, button-enhanced layouts, or alternative designs to perfectly match your website’s style.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/list-demo/multiple-list-styles.png",
		'features'    => [
			'Link',
			'Link Button',
			'List',
			'List Alt',
			'List Button Alt',
		],
	],
	[
		'title'       => 'Default Click Action',
		'description' => 'Define what happens when users click a file and choose to view, download, or edit by default. This gives you complete control over file behavior across your modules to suit your specific needs.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/list-demo/default-click-action.png",
		'features'    => ['View', 'Download', 'Edit'],
	],
	[
		'title'       => 'Generate Links for Folder Files',
		'description' => 'Easily generate shareable links for all files within a selected Google Drive folder. Perfect for quickly creating download pages, organizing file listings, or sharing multiple files effortlessly with a single setup.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/list-demo/generate-links-for-folder-files.png",
		'features'    => ['One-click link generation for folder contents', 'Supports view and download actions', 'Works with public and private folders', 'Ideal for documents, resources, or client deliverables',],
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