<?php
$site_page = 'messageSent';
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include($header_path);
// include($banner_top_path);
?>

 <?php
$query_args = array(
  "order_by" => "publish_date",
  "direction" => "desc"

);
$query_posts = new get_posts;
$loop_posts = $query_posts->show_blog($query_args);
?>

<?php
$messageSent = 'Message sent!';
// echo "Message sent!";

echo '<h2 class="messageSentSucces"> '.$messageSent.'</h2>';
 include($blog_loop);
?>