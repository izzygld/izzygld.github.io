
<?php
$sitePage = '404';
//SITE PATHS INCLUDE (inside php)
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);

include ($header_path);
?>
 <?php
  //Featured Category Loop
  $query_args = array(
  "order_by" => "publish_date",
  "direction" => "desc",
    "posts_per_page" => 9
        );
    $query_posts = new get_posts;
   $loop_posts = $query_posts->show_blog($query_args);

   echo '
<div class="404errorMessage" style="background-color:#f5f5f5;text-align:center;padding-top:20px;margin-bottom:-10px;font-size:large;color:red;">
    <section>
                <p>You have tried to access a page that does not
                exist! Please try again, or use our search to
                find what you are looking for.</p>
    </section>
</div>';
include ($section_one);

?>
