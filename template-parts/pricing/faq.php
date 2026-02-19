<?php

$faqs = [
    [
        'question' => 'Is there any upload size limit for the File Uploader module?',
        'answer'   => 'No, there is no upload size limit for the File Uploader module. You can upload any file size.',
    ],
    [
        'question' => 'Can I link a Connect Drive folder to a user on my site when they have been registered?',
        'answer'   => 'Yes, you can link a Google Drive folder to a user on your site when they have been registered.',
    ],
    [
        'question' => 'Can I use multiple Connect Drive accounts?',
        'answer'   => 'Yes, you can link to multiple Google Drive accounts.',
    ],
    [
        'question' => 'Are there any usage limits?',
        'answer'   => 'Yes, you can link to multiple Google Drive accounts.',
    ],
    [
        'question' => 'Documents preview not working?',
        'answer'   => 'Yes, you can link to multiple Google Drive accounts.',
    ],
    [
        'question' => 'Why search module search results are slow?',
        'answer'   => 'Yes, you can link to multiple Google Drive accounts.',
    ],
];

?>

<section id="connect-drive-faq">
    <div class="container">

        <div class="connect-drive-faq__head">
            <h4 class="connect-drive-faq__head-title">Freequently Asked <span>Questions</span></h4>
            <p class="connect-drive-faq__head-description">We’re happy to answer your questions</p>
        </div>

        <div class="accordion">

            <?php foreach ($faqs as $key => $faq) { ?>
                <div class="accordion-item flex align-center justify-between <?php echo $key === 0 ? 'active' : ''; ?>">
                    <div class="accordion-item-content">
                        <div class="accordion-header">
                            <span><?php echo $faq['question']; ?></span>

                        </div>

                        <div class="accordion-body">
                            <div class="accordion-content">
                                <?php echo $faq['answer']; ?>
                            </div>
                        </div>
                    </div>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M7.5 10H1.25C0.895838 10 0.599171 9.88 0.360004 9.64C0.120838 9.4 0.000837644 9.10334 4.31034e-06 8.75C-0.000829023 8.39667 0.119171 8.1 0.360004 7.86C0.600838 7.62 0.897504 7.5 1.25 7.5H7.5V1.25C7.5 0.895838 7.62 0.599171 7.86 0.360004C8.1 0.120838 8.39667 0.000837644 8.75 4.31034e-06C9.10334 -0.000829023 9.40042 0.119171 9.64125 0.360004C9.88209 0.600838 10.0017 0.897504 10 1.25V7.5H16.25C16.6042 7.5 16.9013 7.62 17.1413 7.86C17.3813 8.1 17.5008 8.39667 17.5 8.75C17.4992 9.10334 17.3792 9.40042 17.14 9.64125C16.9008 9.88209 16.6042 10.0017 16.25 10H10V16.25C10 16.6042 9.88 16.9013 9.64 17.1413C9.4 17.3813 9.10334 17.5008 8.75 17.5C8.39667 17.4992 8.1 17.3792 7.86 17.14C7.62 16.9008 7.5 16.6042 7.5 16.25V10Z" fill="#5C637E" />
                        </svg>
                    </span>
                </div>
            <?php } ?>

        </div>

    </div>
</section>
<script>
    document.addEventListener("DOMContentLoaded", function() {

        const items = document.querySelectorAll(".accordion-item");

        items.forEach(item => {
            const header = item.querySelector(".accordion-header");
            const body = item.querySelector(".accordion-body");

            // Set initial height for active item
            if (item.classList.contains("active")) {
                body.style.height = body.scrollHeight + "px";
            }

            header.addEventListener("click", () => {

                const isActive = item.classList.contains("active");

                // Close all
                items.forEach(i => {
                    i.classList.remove("active");
                    i.querySelector(".accordion-body").style.height = 0;
                });

                // Open clicked if not already open
                if (!isActive) {
                    item.classList.add("active");
                    body.style.height = body.scrollHeight + "px";
                }
            });
        });

    });
</script>