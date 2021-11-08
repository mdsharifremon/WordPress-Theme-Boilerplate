<?php

/** Functions
 * 
 */

?>


<?php get_header(); ?>
<div id="content" class="site-content" role="main">
    <div class="container">
        <main class="main">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('template-parts/post/content', get_post_format()); ?>
                <?php endwhile; ?>
            <?php else : ?>
                <?php get_template_part('template-parts/post/content', 'none'); ?>
            <?php endif; ?>
        </main>
        <aside class="site-sidebar" role="complementary">
            
        </aside>
    </div>
</div>
<?php get_footer(); ?>