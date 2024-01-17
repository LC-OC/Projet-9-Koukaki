<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <video playsinline autoplay muted loop id="banner-video">
                <source src="wp-content\themes\foce-child\assets\video\koukaki-header-video.mp4">
            </video>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>
        <section id="#story" class="story animation_container">
            <h2 class="title_section"><div class="first_part_title_animation">L'histoire</div></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php 
                get_template_part( './template-parts/character-carousel' );
                get_template_part( './template-parts/place-section' );
            ?>            
        </section>


        <section id="studio" class="animation_container">
            <h2 class="title_animation title_section"><div class="first_part_title_animation">Studio </div><div class="second_part_title_animation"> Koukaki</div></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
       <?php 
        get_template_part( './template-parts/festival-section' );
        ?>
    </main><!-- #main -->
    
 

<?php
get_footer();
