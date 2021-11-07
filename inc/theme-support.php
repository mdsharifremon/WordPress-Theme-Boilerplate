<?php
/** 
 *
 *  
 */


?>

<?php 


/**
* @param Essential-theme-supports
* */


function wpcol_theme_setup()
{
/** automatic feed link*/
add_theme_support('automatic-feed-links');

/** tag-title **/
add_theme_support('title-tag');

/** post thumbnail **/
add_theme_support('post-thumbnails');

/** refresh widgets **/
add_theme_support('customize-selective-refresh-widgets');

/** block style **/
add_theme_support('wp-block-styles');

/* Editor Styles */
add_theme_support('editor-styles');
add_theme_support('align-wide');

/** post formats */
add_theme_support('post-formats', array(
                            'aside',
                            'image',
                            'gallery',
                            'video',
                            'audio',
                            'link',
                            'quote',
                            'article',
                            'status'
                        ));

/** HTML5 support **/
add_theme_support('html5', array(
                            'comment-list',
                            'comment-form',
                            'comment',
                            'search-form',
                            'gallery',
                            'caption',
                            'navigation-widgets'
                        ));

/** custom background **/
add_theme_support('custom-background', array(
                            'default-image' => '',
                            'default-preset' => 'default',
                            'default-size' => 'cover',
                            'default-repeat' => 'no-repeat',
                            'default-position-top' => 'center',
                            'default-position-left' => 'center',
                            'default-attachment' => 'scroll',
                            'default-color' => '#fff',
                        ));

/** custom header **/
add_theme_support('custom-header', array(
                            'default-image' => '',
                            'width' => 300,
                            'height' => 80,
                            'flex-height' => true,
                            'flex-width' => true,
                            'default-text-color' => '#222',
                            'header-text' => true,
                            'uploads' => true,
                       ));

/** custom log **/
add_theme_support('custom-logo', array(
                            'height' => 80,
                            'width' => 200,
                            'flex-height' => true,
                            'flex-width' => true,
                            'header-text' => array('site-title', 'site-description'),
                        ));
}
add_action('after_setup_theme', 'wpcol_theme_setup');