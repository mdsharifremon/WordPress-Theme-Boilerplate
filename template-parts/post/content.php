
    <article role="article" class="article">
        <header class="" role="heading">
            <h1 class="article__title"><?php the_title();?></h1>
        </header>
        <?php if( has_post_thumbnail() ):?>
            <div class="article__image">
                <?php the_post_thumbnail();?>
            </div>
        <?php endif;?>
        <div class="article__meta">
            <time class="article__time" datetime="<?php the_time('Y-m-d');?>">
                <?php the_time('Y-m-d');?>
            </time>
            <span class="article__category"><?php the_category(' ');?></span>
        </div>
        <div class="article__content">
            <?php the_excerpt();?>
        </div>
    </article>