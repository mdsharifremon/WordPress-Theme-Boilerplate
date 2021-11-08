<?php

    $message = sprintf(
        /* translators: %s: search query */
        __( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'themename' ),
        // '<span>' . get_search_query() . '</span>'
        '<span>' . get_search_query() . '</span>'
    );
    // echo '<p>' . $message . '</p>';
    echo '<p>' . $message . '</p>';
    // get_search_form();
    get_search_form();


?>