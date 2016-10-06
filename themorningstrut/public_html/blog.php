<?php
$site_page = 'blog';
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include ($header_path);
?>

<?php
//Featured Category Loop
$query_args = array(
  "order_by" => "publish_date",
  "direction" => "asc",
  "posts_per_page" => 28
);
$query_posts = new get_posts;
$loop_posts = $query_posts->show_blog($query_args);



?>
<?php
include ($blog_loop);



// include ($footer_path);
?>









