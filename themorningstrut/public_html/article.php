<?php
// set site page
$site_page = 'article';

// site includes
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include($header_path);

// show one article
if($request["type"] == "slug") {
    include($show_article);
}
// show 404 page
else if($request["type"] == "404"){
    $not_found = "/404.php";
    echo '<meta http-equiv="refresh" content="0; url='.$not_found.'">';
}
// show other page
else {
    $query_args = $this_request->build_query($request);
    $query_args["order_by"] = "title";
    $query_args["direction"] = "desc";
    $query_args["posts_per_page"] = "10";

    $page_title = $request["title"];
    $loop_page = new get_posts;
    $loop_posts = $loop_page->show_blog($query_args);

   if(!empty($page_title)) {
         echo '<h2 id="author_list"> '.$page_title.'</h2>';
    }

include ($section_one);



    // include($section_one_bottom);
    // include($footer_path);
    ?>

    <?php } ?>