<?php
// Integrations features
$integrations_features = [
    'classic-editor' => [
        'title'       => 'Classic Editor',
        'description' => 'The Review and Approve module offers a collaborative workflow where users can review, select, and approve Connect Drive files submitted for feedback or confirmation.',
        'category'    => 'page-builders'
    ],
    'gutenberg' => [
        'title'       => 'Gutenberg',
        'description' => 'The Photo Gallery Module feature of the plugin can display your Connect Drive images on your website in a masonry grid layout with a lightbox preview. This module lets you...',
        'category'    => 'page-builders'
    ],
    'elementor' => [
        'title'       => 'Elementor',
        'description' => 'The Photo Gallery Module feature of the plugin can display your Connect Drive images on your website in a masonry grid layout with a lightbox preview. This module lets you...',
        'category'    => 'page-builders'
    ],
    'divi-page-builder' => [
        'title'       => 'Divi Page Builder',
        'description' => 'The Slider Carousel feature in our Connect Drive plugin lets you create a slideshow of images or videos from your Connect Drive. You can customize it with autoplay...',
        'category'    => 'page-builders'
    ],
    // Add more items with different categories for demonstration
    'contact-form-7' => [
        'title'       => 'Contact Form 7',
        'description' => 'Integrate your Connect Drive files with Contact Form 7 for seamless file uploads and form submissions.',
        'category'    => 'form-plugins'
    ],
    'gravity-forms' => [
        'title'       => 'Gravity Forms',
        'description' => 'Connect Gravity Forms with Connect Drive to store and manage file uploads directly in your drive.',
        'category'    => 'form-plugins'
    ],
    'woocommerce' => [
        'title'       => 'WooCommerce',
        'description' => 'Sell digital products from Connect Drive directly through your WooCommerce store with automatic file delivery.',
        'category'    => 'ecommerce-plugins'
    ],
    'easy-digital-downloads' => [
        'title'       => 'Easy Digital Downloads',
        'description' => 'Integrate EDD with Connect Drive for secure digital file delivery and download management.',
        'category'    => 'ecommerce-plugins'
    ],
    'yoast-seo' => [
        'title'       => 'Yoast SEO',
        'description' => 'Optimize your Connect Drive media files for search engines with Yoast SEO integration.',
        'category'    => 'others'
    ]
];
?>


<!-- Integrations Features -->
<section id="connect-drive__feature" class="connect-drive-features">
    <div class="container">

        <div class="connect-drive-feature__head text-center">
            <h2 class="connect-drive-feature__title">Connect Drive Support for Smarter <span>Integrations</span></h2>
            <p class="connect-drive-feature__description">Unlock the full potential of Connect Drive Support with powerful integrations that boost productivity and streamline workflows. Automate tasks, simplify processes, and keep everything connected — so your team can focus on what truly matters.</p>
        </div>
        
        <div class="connect-drive-feature__search-area-main">
            <div class="connect-drive-button-area">
                <button class="connect-drive-button active" data-filter="all">All</button>
                <button class="connect-drive-button" data-filter="page-builders">Page Builders</button>
                <button class="connect-drive-button" data-filter="form-plugins">Form Plugins</button>
                <button class="connect-drive-button" data-filter="ecommerce-plugins">Ecommerce Plugins</button>
                <button class="connect-drive-button" data-filter="others">Others</button>
            </div>
            
            <div class="connect-drive-feature__search">
                <input type="text" id="feature-search" placeholder="Search for modules">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <circle cx="22.5533" cy="22.5527" r="17.2281" stroke="#5C637E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.5352 35.4299L41.2895 42.1668" stroke="#5C637E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>


        <div class="connect-drive-feature__main" id="feature-items-container">
            <?php
            foreach ($integrations_features as $key => $integrations_feature) { ?>
                <div class="connect-drive-feature__content" 
                     data-category="<?php echo $integrations_feature['category']; ?>"
                     data-title="<?php echo strtolower($integrations_feature['title']); ?>"
                     data-description="<?php echo strtolower($integrations_feature['description']); ?>">
                    <div class="feature-item__icon">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-drive/ex-feature/<?php echo $key; ?>-icon.png"
                            alt="<?php echo $integrations_feature['title']; ?>">
                    </div>
                    <h4 class="feature-sub-title"><?php echo $integrations_feature['title']; ?></h4>
                    <p class="feature-sub-description"><?php echo $integrations_feature['description']; ?></p>
                </div>
            <?php } ?>
        </div>
    </div>
</section>

<style>
/* Add these styles to your CSS file */
.connect-drive-feature__main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.connect-drive-feature__content {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    border: 1px solid #eee;
}

.connect-drive-feature__content:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.connect-drive-feature__content.filter-animate {
    animation: fadeInScale 0.4s ease;
}

@keyframes fadeInScale {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.connect-drive-button-area {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.connect-drive-button {
    padding: 12px 24px;
    border: 2px solid #e0e0e0;
    background: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 30px;
    font-weight: 500;
    color: #333;
}

.connect-drive-button:hover {
    background: #f0f0f0;
    border-color: #0073aa;
}

.connect-drive-button.active {
    background: #0073aa;
    color: white;
    border-color: #0073aa;
}

.connect-drive-feature__search {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
}

.connect-drive-feature__search input {
    width: 100%;
    padding: 15px 60px 15px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 40px;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;
}

.connect-drive-feature__search input:focus {
    border-color: #0073aa;
    box-shadow: 0 0 0 3px rgba(0,115,170,0.1);
}

.connect-drive-feature__search svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none;
}

.connect-drive-feature__search svg circle,
.connect-drive-feature__search svg path {
    stroke: #5C637E;
    transition: stroke 0.3s ease;
}

.connect-drive-feature__search input:focus + svg circle,
.connect-drive-feature__search input:focus + svg path {
    stroke: #0073aa;
}

.feature-item__icon {
    margin-bottom: 15px;
}

.feature-item__icon img {
    max-width: 60px;
    height: auto;
}

.feature-sub-title {
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #333;
}

.feature-sub-description {
    margin: 0;
    color: #666;
    line-height: 1.6;
    font-size: 14px;
}

.no-results-message {
    text-align: center;
    padding: 60px 20px;
    font-size: 18px;
    color: #666;
    background: #f9f9f9;
    border-radius: 8px;
    width: 100%;
    grid-column: 1 / -1;
}

.text-center {
    text-align: center;
}

.connect-drive-feature__head {
    margin-bottom: 40px;
}

.connect-drive-feature__title {
    font-size: 36px;
    margin-bottom: 15px;
    color: #333;
}

.connect-drive-feature__title span {
    color: #0073aa;
}

.connect-drive-feature__description {
    font-size: 16px;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .connect-drive-feature__main {
        grid-template-columns: 1fr;
    }
    
    .connect-drive-button {
        padding: 10px 20px;
        font-size: 14px;
    }
    
    .connect-drive-feature__title {
        font-size: 28px;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const filterButtons = document.querySelectorAll('.connect-drive-button[data-filter]');
    const searchInput = document.getElementById('feature-search');
    const featureItems = document.querySelectorAll('.connect-drive-feature__content');
    const container = document.getElementById('feature-items-container');
    
    // State variables
    let currentFilter = 'all';
    let currentSearch = '';

    // Main filter function
    function filterItems() {
        let visibleCount = 0;
        
        featureItems.forEach(item => {
            // Get item data
            const category = item.getAttribute('data-category');
            const title = item.getAttribute('data-title') || item.querySelector('.feature-sub-title').textContent.toLowerCase();
            const description = item.getAttribute('data-description') || item.querySelector('.feature-sub-description').textContent.toLowerCase();
            
            // Check category filter
            const matchesCategory = currentFilter === 'all' || category === currentFilter;
            
            // Check search filter
            const matchesSearch = currentSearch === '' || 
                                 title.includes(currentSearch) || 
                                 description.includes(currentSearch);
            
            // Show or hide based on both filters
            if (matchesCategory && matchesSearch) {
                item.style.display = 'block';
                visibleCount++;
                
                // Add animation class
                item.classList.add('filter-animate');
                setTimeout(() => {
                    item.classList.remove('filter-animate');
                }, 300);
            } else {
                item.style.display = 'none';
            }
        });

        // Update active button state
        filterButtons.forEach(btn => {
            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Show/hide no results message
        showNoResultsMessage(visibleCount === 0);
    }

    // Function to show no results message
    function showNoResultsMessage(show) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (show) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.textContent = 'No features found matching your criteria.';
                container.appendChild(noResultsMsg);
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }
    }

    // Button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            currentFilter = this.getAttribute('data-filter');
            filterItems();
        });
    });

    // Search input handler with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value.trim().toLowerCase();
            filterItems();
        }, 300);
    });

    // Initialize with all items visible
    filterItems();

    // Add clear search functionality
    const searchContainer = document.querySelector('.connect-drive-feature__search');
    
    // Create clear button
    const clearButton = document.createElement('span');
    clearButton.innerHTML = '×';
    clearButton.className = 'search-clear';
    clearButton.style.cssText = `
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 24px;
        color: #5C637E;
        display: none;
        z-index: 10;
        font-weight: bold;
    `;
    
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(clearButton);
    
    // Show/hide clear button based on input
    searchInput.addEventListener('input', function() {
        clearButton.style.display = this.value ? 'block' : 'none';
    });
    
    // Clear search on button click
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        currentSearch = '';
        filterItems();
        searchInput.focus();
    });

    // Handle enter key in search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            currentSearch = this.value.trim().toLowerCase();
            filterItems();
        }
    });

    // Log for debugging
    console.log('Filter and search initialized with', featureItems.length, 'items');
});
</script>