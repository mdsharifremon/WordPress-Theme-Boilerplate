<?php  ?>

<?php


function themename_enqueue_assets() {

wp_enqueue_style( 'main-stylesheet', ASSETS_DIR . 'css/main.css', array(), '1.0.0', 'all' );
//enqueue jquery
wp_enqueue_script('jquery');
wp_enqueue_script( 'main-script', ASSETS_DIR . 'js/main.js', array( 'jquery' ), '1.0.0', true );

}


add_action( 'wp_enqueue_scripts', 'themename_enqueue_assets' );





?>