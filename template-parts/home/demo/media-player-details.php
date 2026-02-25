<?php

$features = [
    [
        'title'       => 'Play Audio/Video  Files in Single Player',
        'description' => 'Group and play multiple media files in one unified player with playlist support. Users can easily navigate between tracks or videos without switching players.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/media-demo/play-multiple-media-files-single-player.png",
        'features'    => ['Seamless playlist playback in one player', 'Supports audio and video files', 'Auto-play the next file in queue', 'Clean, user-friendly interface']
    ],
    [
        'title'       => 'Easy to Manage Your Media Player',
        'description' => 'You can play your connect Drive audio & video files with a playlist into your website. Audio and video can be played in a single player.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/media-demo/media-player.png",
        'features'    => ['Manage Media Files', 'Preview Media Files', 'Download Any Files ', 'Import Media & Delete',]
    ],
    [
        'title'       => 'Actionable Playlist Support',
        'description' => 'Enhance your media playback experience with interactive playlists. The Media Player module supports actionable playlists where users can play, download, or view media details directly from the playlist interface.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/media-demo/actionable-playlist-support.png",
        'features'    => ['Play audio/video directly from the list', 'View file descriptions and details', 'Supports connect Drive-hosted media', 'Clean, responsive playlist UI',]
    ],
    [
        'title'       => 'Flexible Video Playback Modes',
        'description' => 'Support both embedded and direct media playback with flexible player options. Whether it\'s a YouTube video, MP3 file, or a connect Drive-hosted file, the Media Player module handles it all seamlessly.',
        'image'       => get_template_directory_uri() . "/assets/images/connect-drive/media-demo/multiple-media-player-types.png",
        'features'    => ['Embed', 'Direct Media',]
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