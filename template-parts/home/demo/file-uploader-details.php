<?php
$features = [
	[
		'title'       => 'One-Click File Uploader',
		'description' => 'The File Uploader lets you and your users upload files straight to your Google Drive from your site in just one click.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/uploader-demo/one-click.png",
		'features'    => ['Create Perfect Upload', 'Customize Uploader', 'Easily Upload Documents ', 'Close Uploaded Files',],
	],

	[
		'title'       => 'Google Drive Upload Field for Popular Forms',
		'description' => 'Easily add a Google Drive upload field to your favorite forms, allowing users to send files straight to your Google Drive. Streamline file collection, stay organized, and boost collaboration effortlessly.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/uploader-demo/form-illustration.png",
		'features'    => ['Contact Form 7', 'WPForms', 'Gravity Forms', 'Ninja Forms', 'Fluent Forms', 'Formidable Forms', 'Elementor Form', 'MetForm'],
	],
	[
		'title'       => 'Upload to connect Drive',
		'description' => 'With Connect Drive, users can upload files directly to their connected Google Drive right from their WordPress site. It’s a fast, secure, and seamless way to collect files without giving external access to your Google Drive.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/uploader-demo/uploader-style.png",
		'features'    => ['Direct upload to connect Drive', 'Supports multiple file types and sizes', 'Secure uploads with permission control', 'Role and permission-based uploads',],
	],
	[
		'title'       => 'Specific Folder Selector',
		'description' => 'With Connect Drive, you can effortlessly select the exact Google Drive folder where files will be uploaded or displayed. The Specific Folder Selector gives you complete control over file organization for each module—no hardcoding of folder IDs required.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/uploader-demo/specific-folder-selector.png",
		'features'    => ['Select connect Drive folders visually from WordPress', 'Avoids manual folder ID entry', 'Supports nested folders', 'Saves time and improves accuracy',],
	],
	[
		'title'       => 'Uploaded File Description',
		'description' => 'Let users add a custom description when uploading files via the File Uploader module. The description is saved to Google Drive and can be viewed directly from Drive or used within your file display modules.',
		'image'       => get_template_directory_uri() . "/assets/images/connect-drive/uploader-demo/uploaded-file-description.png",
		'features'    => ['Add file description during upload', 'Description saved in connect Drive metadata', 'Enhances file context and organization', 'An optional and user-friendly input field',],
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