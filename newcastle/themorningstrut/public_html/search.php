<?php
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include($walla_path);


$dan = get_search_results("Really Work?");
dump_data($dan);

$results = array();
foreach($dan as $res){
    array_push($results, $res);
}

$query_args = array(
    'content_id' => $results,
);
dump_data($query_args);

$search_res = new posts;
$show_res = $search_res->show_blog($query_args);
//include('analyze-loop-one.php');
var_dump($show_res);
?>
