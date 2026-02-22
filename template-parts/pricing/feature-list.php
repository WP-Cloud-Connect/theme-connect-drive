 <?php
	$features = [
		[
			'title'       => 'Easy setup',
			'description' => 'You don’t need to create any custom Google app. You can sign-in to your Google account directly using this plugin.',
			'video'		  => '',
			'pro'         => true,
		],
		[
			'title'       => 'Review & Approve Module',
			'description' => 'The Review and Approve module offers a collaborative workflow where users can review, select, and approve Google Drive files submitted for feedback or confirmation. Ideal for use cases like photo proofing, document approvals, or asset selection, this module includes selection checkboxes, approval status indicators, and comment support.',
			'video'		  => '',
			'pro'         => false,
		],
		[
			'title'       => 'List Files',
			'description' => 'The List Files module offers a clean, organized interface to display your Google Drive files, allowing users to preview and download files directly from the list.',
			'video'		  => '',
			'pro'         => false,
		],
		[
			'title'       => 'Gallery - Module',
			'description' => 'Display your images in a lightbox grid photo gallery. The gallery will be automatically created from the selected folders.',
			'video'       => '<iframe width="100%" height="315" src="https://www.youtube.com/embed/GE1vRI1iOK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'pro'         => true,
		],
		[
			'title'       => 'Slider Carousel - Module',
			'description' => 'The Slider Carousel feature in our Google Drive plugin lets you create a slideshow of images or videos from your Google Drive. You can customize it with autoplay and navigation buttons to make your content more engaging and visually appealing.',
			'video'       => '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dZw0z84t-5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'pro'         => false,
		],
	];
	?>

 <section id="connect-drive-features">
 	<div class="container">
 		<div class="connect-drive-features__header">
 			<h2 class="connect-drive-features__title">Choose the best plan that fits your needs</h2>
 			<p class="connect-drive-features__description">we've created several packages with different features in them. These are priced according to the value they deliver.</p>
 		</div>

 		<div class="connect-drive-features-wrapper">
 			<div class="connect-drive-features-wrapper__header">
 				<h5 class="connect-drive-features-wrapper__title">Features</h5>
 				<span class="feature-type type-free">FREE</span>
 				<span class="feature-type type-pro">PRO</span>
 			</div>

 			<div class="accordions" id="features-accordion">
 				<?php foreach ($features as $key => $feature) { ?>
 					<div class="accordion-items">
 						<h2 class="accordion-headers" id="heading-<?php echo $key; ?>">
 							<button class="accordion-buttons" type="button" onclick="toggleAccordion(this)" aria-expanded="false">
 								<div class="title">
 									<svg class="fa-chevron-down" xmlns="http://www.w3.org/2000/svg" width="19" height="11" viewBox="0 0 19 11" fill="none">
 										<path d="M2.08437 10.7911C2.48842 10.4567 2.84777 10.06 3.21568 9.6863C3.28401 9.61704 3.35235 9.54779 3.4207 9.47854C3.56701 9.33027 3.71326 9.18193 3.85945 9.03355C4.07082 8.81902 4.2823 8.6046 4.49379 8.3902C4.83705 8.04222 5.18022 7.69417 5.52334 7.34606C5.85637 7.00819 6.18944 6.67036 6.52256 6.33258C6.54314 6.31171 6.56373 6.29084 6.58493 6.26933C6.6882 6.16462 6.79147 6.05991 6.89475 5.95519C7.74957 5.08844 8.60426 4.22155 9.45886 3.35457C9.57154 3.40565 9.64911 3.46301 9.73599 3.5515C9.76097 3.57677 9.78595 3.60203 9.81169 3.62805C9.83884 3.65588 9.86598 3.68372 9.89395 3.71239C9.93755 3.75665 9.93755 3.75665 9.98204 3.8018C10.0797 3.90104 10.1772 4.00054 10.2746 4.10005C10.3445 4.17112 10.4143 4.24219 10.4842 4.31323C10.6349 4.46643 10.7855 4.61976 10.936 4.77317C11.1539 4.9953 11.3721 5.21715 11.5903 5.43891C11.9449 5.79914 12.2993 6.15949 12.6536 6.51996C12.6749 6.54153 12.6961 6.56311 12.7179 6.58534C13.0186 6.89123 13.3191 7.19724 13.6196 7.50329C13.6408 7.52482 13.6619 7.54635 13.6837 7.56854C13.7048 7.59004 13.7259 7.61155 13.7477 7.6337C14.1003 7.99278 14.4531 8.35156 14.8062 8.7101C15.0239 8.93112 15.2413 9.15237 15.4583 9.37395C15.6073 9.52594 15.7565 9.67765 15.9059 9.82916C15.992 9.91647 16.078 10.0039 16.1637 10.0917C16.2568 10.187 16.3504 10.2819 16.4441 10.3766C16.4708 10.4041 16.4974 10.4316 16.5249 10.4599C16.8147 10.7508 17.148 10.9852 17.5675 10.9912C17.5927 10.991 17.618 10.9908 17.644 10.9906C17.6703 10.9904 17.6966 10.9902 17.7237 10.99C17.9256 10.9854 18.0631 10.9598 18.2415 10.8662C18.266 10.8534 18.2906 10.8406 18.3158 10.8275C18.6335 10.6466 18.8521 10.3605 18.9674 10.0117C19.0518 9.5467 18.9738 9.16647 18.717 8.78043C18.5962 8.61552 18.4536 8.47382 18.31 8.32929C18.2762 8.29481 18.2424 8.26032 18.2076 8.22479C18.1145 8.12982 18.0211 8.03519 17.9276 7.94063C17.8265 7.83829 17.7257 7.73563 17.6249 7.63302C17.4277 7.43233 17.2302 7.23195 17.0325 7.03169C16.8718 6.86885 16.7112 6.70592 16.5506 6.54291C16.5043 6.49587 16.4579 6.44884 16.4116 6.4018C16.3885 6.37839 16.3655 6.35497 16.3417 6.33085C15.906 5.88854 15.4699 5.44661 15.0337 5.00479C14.6351 4.60099 14.237 4.19669 13.8391 3.79217C13.43 3.3763 13.0206 2.96079 12.6108 2.54564C12.3809 2.31276 12.1512 2.07975 11.9218 1.84636C11.7266 1.64769 11.531 1.44936 11.3351 1.25144C11.2352 1.15056 11.1355 1.04953 11.0361 0.948082C10.9282 0.837879 10.8196 0.728426 10.7109 0.619024C10.6799 0.587176 10.649 0.555328 10.6171 0.522515C10.2607 0.166675 9.92615 0.00102254 9.42969 -1.4206e-07C8.88938 0.0100351 8.54727 0.361076 8.18453 0.729767C8.13377 0.780921 8.13377 0.78092 8.08198 0.833107C7.98869 0.927126 7.89563 1.02138 7.80261 1.11567C7.70201 1.21757 7.60118 1.31926 7.50039 1.42098C7.28038 1.64311 7.06065 1.86551 6.84096 2.08797C6.70367 2.227 6.56632 2.36596 6.42895 2.50491C6.04823 2.89004 5.66757 3.27522 5.28716 3.66065C5.26285 3.68528 5.23854 3.70991 5.2135 3.73529C5.16422 3.78522 5.11495 3.83514 5.06567 3.88507C5.04122 3.90985 5.01676 3.93463 4.99156 3.96017C4.96707 3.98498 4.94258 4.00979 4.91735 4.03535C4.52044 4.43749 4.1231 4.83919 3.72556 5.24069C3.31691 5.65342 2.90861 6.06651 2.50066 6.47995C2.27181 6.71188 2.04281 6.94365 1.81343 7.17504C1.61816 7.37202 1.42321 7.56933 1.22867 7.76706C1.12951 7.86783 1.0302 7.96845 0.93048 8.06866C0.82215 8.17753 0.714558 8.28713 0.607017 8.3968C0.56006 8.44365 0.56006 8.44365 0.512155 8.49144C0.159158 8.85431 -0.000781826 9.19163 2.87286e-06 9.69653C0.00642278 10.0898 0.134261 10.351 0.404327 10.6292C0.869249 11.0585 1.54624 11.1185 2.08437 10.7911Z" fill="white" />
 									</svg>
 									<span class="feature-title"><?php echo $feature['title']; ?></span>
 								</div>
 								<?php echo !empty($feature['pro']) ? '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
									<path d="M5.41417 10.8275C5.04083 10.8275 4.6675 10.6858 4.3825 10.4008L0.4275 6.44583C-0.1425 5.87583 -0.1425 4.9525 0.4275 4.38417C0.9975 3.81417 1.91917 3.8125 2.48917 4.3825L5.41417 7.3075L12.2942 0.4275C12.8642 -0.1425 13.7858 -0.1425 14.3558 0.4275C14.9258 0.9975 14.9258 1.92083 14.3558 2.49083L6.44583 10.4008C6.16083 10.6858 5.7875 10.8275 5.41417 10.8275" fill="white"/>
									</svg>' : '<svg class="pro-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
									<path d="M1.2998 1.30005L11.2998 11.3M11.2998 1.30005L1.2998 11.3" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>'; ?>
 								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
 									<path d="M5.41417 10.8275C5.04083 10.8275 4.6675 10.6858 4.3825 10.4008L0.4275 6.44583C-0.1425 5.87583 -0.1425 4.9525 0.4275 4.38417C0.9975 3.81417 1.91917 3.8125 2.48917 4.3825L5.41417 7.3075L12.2942 0.4275C12.8642 -0.1425 13.7858 -0.1425 14.3558 0.4275C14.9258 0.9975 14.9258 1.92083 14.3558 2.49083L6.44583 10.4008C6.16083 10.6858 5.7875 10.8275 5.41417 10.8275" fill="white" />
 								</svg>
 							</button>
 						</h2>

 						<div id="collapse-<?php echo $key; ?>" class="accordion-collapse">
 							<div class="accordion-bodys">
 								<div class="description">
 									<?php echo $feature['description']; ?>
 								</div>
 								<?php if (!empty($feature['video'])) { ?>
 									<div class="video">
 										<?php echo $feature['video']; ?>
 									</div>
 								<?php } ?>
 							</div>
 						</div>
 					</div>
 				<?php } ?>
 			</div>
 		</div>
 	</div>
 </section>

 <script>
 	function toggleAccordion(button) {
 		// Toggle active class on button
 		button.classList.toggle('active');

 		// Get the collapse element
 		const collapse = button.closest('.accordion-items').querySelector('.accordion-collapse');

 		// Toggle show class
 		collapse.classList.toggle('show');

 		// Update aria-expanded
 		const isExpanded = button.getAttribute('aria-expanded') === 'true' ? false : true;
 		button.setAttribute('aria-expanded', isExpanded);

 		// Close other accordion items (optional - uncomment if you want only one open at a time)

 		const allItems = document.querySelectorAll('.accordion-items');
 		allItems.forEach(item => {
 			if (item !== button.closest('.accordion-items')) {
 				item.querySelector('.accordion-buttons').classList.remove('active');
 				item.querySelector('.accordion-collapse').classList.remove('show');
 				item.querySelector('.accordion-buttons').setAttribute('aria-expanded', 'false');
 			}
 		});
 	}
 </script>