<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/sass/index.css', array(), filemtime(get_stylesheet_directory() . '/sass/index.css'));
    wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' );
    
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}


function scripts() {
    wp_enqueue_script( 'script-skrollr', get_stylesheet_directory_uri() . '/js/skrollr.min.js', array( 'jquery' ),'',true );
    wp_enqueue_script( 'script-animation', get_stylesheet_directory_uri() . '/js/animations.js', array( 'jquery' ),'',true );
    wp_enqueue_script( 'script-swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array( 'jquery' ),'',true );
    wp_enqueue_script( 'script-font-awesome', 'https://kit.fontawesome.com/019b68e105.js', array( 'jquery' ),'' );
    wp_enqueue_script( 'script-carousel', get_stylesheet_directory_uri() . '/js/characterCarousel.js', array( 'jquery' ),'',true );    
}
add_action( 'wp_enqueue_scripts', 'scripts' );



//wp_enqueue_script( 'script', get_template_directory_uri() . '/js/animations.js', array( 'jquery' ), 1.1, true);
//wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/animations.js', array( 'jquery' ),'',true );