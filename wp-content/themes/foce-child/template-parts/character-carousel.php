<article id="carousel_section">
<h3 class="title_animation title_section"><div class="first_part_title_animation">Les </div><div class="second_part_title_animation">personnages</div></h3>
<div class="swiper sample-slider animation_container">
    <div class="swiper-wrapper">
        <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',
            );
            $characters_query = new WP_Query($args);
            while ( $characters_query->have_posts() ) {
                $characters_query->the_post();
                echo '<div class="swiper-slide">';
                echo get_the_post_thumbnail( get_the_ID(), 'full' );
                echo '<figcaption>';
                the_title();
                echo'</figcaption>';
                echo '</div>';
            }
    ?>
    </div>
</div>
</article>