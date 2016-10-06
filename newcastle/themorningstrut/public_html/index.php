<?php
$site_page = 'home';
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include ($header_path);
?>
 <?php
// is this a search?
if(isset($_GET['s']) && $_GET['s'] != ''){
    $results = get_search_results($_GET['s']);
    $search_results = array();
    foreach($results as $post) array_push($search_results, $post);
    $query_args = array(
    "order_by" => "title",
    "direction" => "asc",
    "slug" => $search_results,
    );
}
else {
    //set query args
    $query_args = array(
        "order_by" => "publish_date",
        "direction" => "desc",
        "posts_per_page" => 5
    );
}

$query_posts = new get_posts;
$loop_posts = $query_posts->show_blog($query_args);
include ($section_one);

?>