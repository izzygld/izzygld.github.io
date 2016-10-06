<?php
//set a default timezone
date_default_timezone_set("America/New_York");

// START CLASSES


class get_posts{

		protected $content;

		function __construct() {
			$this->content = $this->setContent();
			$this->show_next = false;
			$this->show_previous = false;
   		}

		# ---------------------------
		# define the content function
		# ---------------------------
		private function setContent(){
			$path ="includes/content.php";
			$content = file_get_contents($path);
			$content = json_decode($content, TRUE);
			return $content;
		}

		public function getContent(){
			return $this->content;
		}

		# ------------------------------
		# function hide some single post
		# ------------------------------
		public function hidePost($content,$meta,$val){

			foreach ($content as $key => $values) {
			if($values[$meta] == $val){ unset($content[$key]); }
			}
			return $content;
		}

		# -------------------------
		# function hide multi Posts
		# -------------------------
		public function hideAll($content,$hideArray){

			foreach ($hideArray as $key => $values) {
				if(is_array($values)){
					foreach ($values as $value) {
					$content = $this->hidePost($content,$key,$value);
				}
				}else{
					$content = $this->hidePost($content,$key,$values);
				}

			// $content = $this->hidePost($content,$key,$value);
			}

			return $content;
		}

		# ------------------------------------
		# function to check if content_meta in loop matches ALL user-defined query categories.
		# @ param content is the content_meta we are checking
		# @ param query_cats are the categories specified in the user query
		# ------------------------------------
		public function check_categories($content, $query_value){
			$result = array();
			$vals_to_check = array();

			if(is_array($query_value)) $vals_to_check = $query_value;
			else array_push($vals_to_check, $query_value);

			foreach($vals_to_check as $this_value){
				foreach ($content as $value) {
					$system_cat_fields = array('category', 'category2', 'category3');
					$content_cat_fields = array();
					foreach($system_cat_fields as $category_f){
						if($value[$category_f]) array_push($content_cat_fields, $value[$category_f]);
					}
					// how many category fields are defined for the post we are checking?
					$content_cat_fields_count = count($content_cat_fields);

					// how many categories is the user searching for?
					$searched_cat_count = count($vals_to_check);
					// compare the arrays, return matches
					$crosscheck_result = array_intersect($vals_to_check,$content_cat_fields);
					$count_cross = count($crosscheck_result);
					if($count_cross >= $searched_cat_count) {
						array_push($result, $value);
					}
				}
			}
			return $result;
		}

		# ------------------------------------
		# function to check if posts meet user query. Filters out posts that don't meet the $query_args and returns entire content_meta array
		# @ param content is the array of content_metas
		# @ param query_value is value passed by query args for the given type of query
		# @ param type is the type of query
		# $legal_query_types array controls which Query Keys are acceptable
		# ------------------------------------
		public function checkValue($content,$query_value,$type){
			$result = array();

			// convert values to array
			$vals_to_check = array();
			if(is_array($query_value)) $vals_to_check = $query_value;
			else array_push($vals_to_check, $query_value);

			foreach($vals_to_check as $this_value)
				foreach ($content as $value) {
					if($value[$type] == $this_value) array_push($result, $value);
				}
			return $result;
		}

		# ------------------------------------
		# function to check the category if -1
		# ------------------------------------
		public function category($content,$value){

			if($value == -1){
				$result = array();
				foreach ($content as  $val) {
					if(empty($val['category']) && empty($val['category2']) && empty($val['category3'])){
						array_push($result, $val);
					}
				}
			}else{
				$result = $this->check_categories($content,$value);
			}
			return $result;
		}
		# --------------------------------
		# function to check the tag if -1
		# --------------------------------
		public function tag($content,$value){

			if($value == -1){
				$result = array();
				foreach ($content as  $val) {
					if(empty($val['tag'])){
						array_push($result, $val);
					}
				}
			}else{
				$result = $this->checkValue($content,$value,"tag");
			}
			return $result;
		}

		public function filter_by($content, $value, $type){
			if($value == -1){
				$result = array();
				foreach ($content as  $val) {
					if(empty($val[$type])){
						array_push($result, $val);
					}
				}
			}else{
				$result = $this->checkValue($content,$value,$type);
			}
			return $result;
		}

		# ---------------------------------------------------
		# function to get array of content_id with meta value
		# ---------------------------------------------------
		public function setKey($content,$key,$val){

			$array = array();
			foreach($content as $value){
				 $array[$value[$key]] = $value[$val];
			}

			return $array;
		}

		# --------------------------------------
		# function to sort the array ASC or DESC
		# --------------------------------------
		public function orderSort($order,$array){

			$order = strtolower($order);
			switch($order){
				case 'desc':
				arsort($array);
				break;
				case 'asc':
				asort($array);
				break;
			}
			return array_keys($array);

		}

		# ---------------------------------------------------
		# function to return posts, no order array of content_id with meta value
		# ---------------------------------------------------
		public function setKeyNoSort($content,$key){

			$array = array();
			foreach($content as $value){
				 $array[] = $value[$key];
			}
			return $array;
		}

		# ---------------------------
		# function return Attrs posts
		# ---------------------------
		public function returnAttr($content_id){
 				$array = array();
 				foreach ($this->getContent() as $value) {
 					if($value['slug'] == $content_id){
						if($this->show_previous) $value['show_prev'] = $this->show_previous;
						if($this->show_next) $value['show_next'] = $this->show_next;
						array_push($array, $value);
 					}
 				}

 				return $array[0];
 				// print_r($array[0]);
		}

		# -------------------------
		# function posts pagination
		# -------------------------
		// paginate($result,$array['posts_per_page'],$_GET['page']);
		public function paginate($array,$limit,$page){

			$pages = ceil(count($array) / $limit);
			if(empty($page) || $page == 0){ $page=1; }
			$this_page = $page;

			if($page > $pages) { $page = $pages; }
			$from =  ($page*$limit)-$limit;
			$result = array_slice( $array, $from, $limit );

			// set global vars for Show Pagination buttons
			if(isset($_GET['page'])) $current_page = $_GET['page'];
			else $current_page = 1;

			if($this_page < $pages) $this->show_next = $current_page + 1;
			if($this_page > 1) $this->show_previous = $current_page - 1;

			return $result;
		}

		# ------------------------
		# function to return posts
		# ------------------------
		public function returnPosts($array){
			
			$posts = array();
			foreach ($array as $value) {

				$postPath = "includes/content/" . $value . ".php";
        		$this_content = file_get_contents($postPath);
        		$this_content = json_decode($this_content, TRUE);
        		$posts[$value] = $this->returnAttr($value);
        		$posts[$value]['content'] = $this_content['block1'];
						$posts[$value]['summary'] = $this_content['block2'];

			}
			return $posts;
		}

		# ------------------------
		# function to convert array of posts into one article
		# ------------------------

		public function show_one_article($article){
			$this_key = array_keys($article);
			$this_key = $this_key[0];
			$result = $article[$this_key];
			return $result;
		}


		# ------------------------
		# function show_blog final
		# ------------------------

		public function show_blog($array){

			// $hideBySort,$postsToHideArray,$sortContentIdBy,$orderBy,$limitPostsPerPage,$getPage
			# $hideBySort = is what meta you want to search in it and hide some thing exp: content_id or title or category
			# $postsToHideArray = array of ids or titles or any meta in your array you want to hide them;

			$result = $this->getContent();

			if(isset($array['hidePostsArray'])){
		 		$result = $this->hideAll($result,$array['hidePostsArray']);
			}
			# $sortContentIdBy = what type your main key you want to sort on it like: publish_date, category,title,ids ...etc

			// filter posts by content
			if(isset($array['category'])){
				$result = $this->category($result,$array['category']);
			}

			// filter posts by other fields
			$legal_query_types = array('tag', 'site_author', 'slug', 'content_id');
			foreach($array as $key => $value){
				if( in_array($key, $legal_query_types) ) {
					$result = $this->filter_by($result, $value, $key);
				}
			}

			if(isset($array['order_by']) && isset($array['direction'])){
				$result = $this->setKey($result,'slug',$array['order_by']);

				# $orderBy = order result by ASC or DESC

				$result = $this->orderSort($array['direction'],$result);
			}
			else{

				$result = $this->setKeyNoSort($result,'slug');
			}


			# $limitPostsPerPage = this for how many posts per page
			# $getPage = to paginate by pages number
			if(isset($array['posts_per_page'])){
				if($array['posts_per_page'] != "no_limit"){
				$_GET['page'] = (isset($_GET['page'])) ? $_GET['page'] : 1;
				$result = $this->paginate($result,$array['posts_per_page'],$_GET['page']);
				}
			// print_r($result);
			}

			//dump_data($result);
			#final to show blog function array of posts
			$getPosts = $this->returnPosts($result);

		return $getPosts;
		}

}

class request{

	public function set_request_array($user_request){
		if (strpos($user_request,'?') !== false) {
			$user_request = explode("?", $user_request);
			$user_request = $user_request[0];
		}
		// get amount of segments
		$user_request = trim($user_request, "/");
		$request_array = explode("/", $user_request);
		$this->request_array = $request_array;
		return $request_array;
	}

	public function get_request_array(){
		return $this->request_array;
	}

	// normal count
	public function set_request_count($request_array){
		$count_segments = count($request_array);
		$this->request_count = $count_segments;
		$this->request_zero_count = $count_segments - 1;
	}

	public function get_request_count(){
		return $this->request_count;
	}

	public function get_request_zero_count(){
		return $this->request_zero_count;
	}

	public function set_meta_fields($type){
		$this_meta = "includes/".$type.".php";
		$this_meta = file_get_contents($this_meta);
		$this_meta = json_decode($this_meta, TRUE);
		return $this_meta;
	}

	public function check_for_field($result, $library, $type){
		// check by category
		if($type == "categories"){
			$found_cats = array();
			$count_cats = count($result);
			for($ii=0; $ii < $count_cats; $ii++) {
				$cat_to_check = $result[$ii];
				$i = 0;
				foreach($library as $cats){
					if (in_array($cat_to_check, $cats)){
						$found_cat = true;
						$found_row = $i;
						$this_title = $library[$cat_to_check];
						array_push($found_cats, $cat_to_check);
					}
					$i++;
				}
			}
			if($found_cat) {
				$found_it = array(
					"type" => "category",
					"value" => $found_cats,
					"title" => $library[$found_row]["category"],
				);
				return $found_it;
			}
		}
		// check for other fields
		else {
			$last_segment = $this->get_request_zero_count();
			$value = $result[$last_segment];

			// default key
			$slug_key = 'title';

			switch ($type) {
			case "authors":
				$output_field = 'site_author';
				$slug_library = 'authors';
				$slug_key = 'user_name';
				break;
			case "tags":
				$output_field = 'tag';
				$slug_library = 'tags';
				break;
			case "slugs":
				$output_field = 'slug';
				$slug_library = 'slugs';
				break;
		}

			$this_title = get_fancy_name($slug_library, $value, $slug_key);
			foreach($library as $posts){
				if (in_array($value, $posts)){
					$found_it = array(
						"type" => $output_field,
						"value" => $value,
						"title" => $this_title,
					);
				}
			}
		}
		if($found_it) return $found_it;
	}

	public function build_query($found_it_array){

		$this_query_type = $found_it_array["type"];

		// is this 404? if so, send blank array
		if($this_query_type == "404"){
			$query_args = array();
		}

		else if($this_query_type == "site_author"){
			$authors_meta = $this->set_meta_fields('authors');
			$i = 0;
			foreach($authors_meta as $authors){
				if($authors['slug'] == $found_it_array["value"]){
					$key = 'site_author';
					$value = $authors_meta[$i]['user_name'];
					$query_args = array(
						$key => $value,
					);
					return $query_args;
				}
				$i++;
			}
		}
		else if(is_array($found_it_array["value"])){
			$count_vals = count($found_it_array["value"]);
			$values = array();
			foreach($found_it_array["value"] as $key => $value){
				if($count_vals > 1){
					array_push($values, $value);
					$this_query_value = $values;
				}
				else $this_query_value = $value;
			}
			$query_args = array($this_query_type => $this_query_value);
		}
		else {
			$key = $found_it_array["type"];
			$value = $found_it_array["value"];
			$query_args = array(
				$key => $value,
			);
		}
		return $query_args;
	}

	public function parse_request($user_request, $dev_mode = 'false'){
		// is this a paginated URL? if so, ignore

		$this_request = $this->set_request_array($user_request);
		$result = $this->get_request_array();
		$this->set_request_count($result);

		$fields_to_check = array('slugs', 'categories', 'tags', 'authors');

		foreach($fields_to_check as $fields){
			$this_library = $this->set_meta_fields($fields);
			$value_check = $this->check_for_field($result, $this_library, $fields);
			if($value_check["type"]) {
				// echo "FOUND: <br/>";
				// var_dump($value_check);
				return ($value_check);
			}
		}

		// if request not found, go to 404 page
		$found_it = array(
			"type" => "404",
		);
		return $found_it;
	}
}

// START FUNCTIONS

function get_excerpt($this_content, $char_amount){
	$excerpt = strip_tags($this_content);
	$excerpt = trim($excerpt, "&nbsp;");
	$excerpt = trim($excerpt, "quot;");
	$excerpt = substr($excerpt, 0, $char_amount);
	$last_space = strrpos($excerpt," ");
	$excerpt = substr($excerpt, 0, $last_space);
	$excerpt.= "...";
	return $excerpt;
}

function convert_publish_date($publish_date, $date_format){
	$return_date = date($date_format, $publish_date);
	return $return_date;
}

// function convert_publish_date($publish_date, $date_format){
	// $return_date = date($date_format, $publish_date);
	// return $return_date;
// }

function process_uri($uri){
	$uri = trim($uri, "/");
	$segments = explode("/", $uri);
	return $segments;
}

function list_categories($cat_array){
	$string = '';
	foreach($cat_array as $cats){
		$string.= $cats . " ";
	}
	return $string;
}

function get_author_slug($author_name){
	$author_meta = "includes/authors.php";
	$author_meta = file_get_contents($author_meta);
	$author_meta = json_decode($author_meta, TRUE);
	$i = 0;
	foreach($author_meta as $authors){
		if (in_array($author_name, $authors)){
			$found_row = $i;
			$found_author_slug = $author_meta[$found_row]["slug"];
		}
	$i++;
	}
	return($found_author_slug);
}

function get_author_bio($author_name){
	$author_meta = "includes/authors.php";
	$author_meta = file_get_contents($author_meta);
	$author_meta = json_decode($author_meta, TRUE);
	$i = 0;
	foreach($author_meta as $authors){
		if (in_array($author_name, $authors)){
			$found_row = $i;
			$found_author_bio = $author_meta[$found_row]["bio"];
		}
	$i++;
	}
	return($found_author_bio);
}

function get_fancy_name($type, $value, $key){

	$this_meta = "includes/".$type.".php";
	$this_meta = file_get_contents($this_meta);
	$this_meta = json_decode($this_meta, TRUE);

	$i = 0;
	foreach($this_meta as $metas){
		if (in_array($value, $metas)){
			$found_row = $i;
			$found_fancy_name = $this_meta[$found_row][$key];
		}
	$i++;
	}
	return($found_fancy_name);

}

// SHOW 1 Post


function show_these_posts($these_posts){
	$posts_to_return = array();

	// build post library
	$content_meta = "includes/content.php";
	$content_meta = file_get_contents($content_meta);
	$content_meta = json_decode($content_meta, TRUE);

	$id_library = array();
	foreach($content_meta as $all_meta){
		 array_push($id_library, $all_meta['content_id']);
	}

	foreach($these_posts as $meta){
		// GET KEYS OF META DATA

		$content_id = $meta;
        $posts_to_return[$content_id] = array();
        $this_content_path = "includes/" . $content_id . ".php";
        $this_content = file_get_contents($this_content_path);
        $this_content = json_decode($this_content, TRUE);

        foreach($this_content as $key => $value ) {
            $posts_to_return[$content_id][$key] = $value;
        }

        $this_meta_row = array_search($content_id, $id_library);
		$meta_keys = array_keys($content_meta[$this_meta_row]);
        foreach($meta_keys as $meta_key) {
            $posts_to_return[$content_id][$meta_key] = $content_meta[$this_meta_row][$meta_key];
        }

		// show Next of Previous ??
		if($enable_next == 1)  $posts_to_return[$content_id]['show_next'] = 1;
		if($enable_back == 1)  $posts_to_return[$content_id]['show_prev'] = 1;
		$posts_to_return[$content_id]['current_page'] = $current_page;
		$posts_to_return[$content_id]['next_page'] = $current_page + 1;
		$posts_to_return[$content_id]['prev_page'] = $current_page - 1;
	}

	return $posts_to_return;
}

//function to shorten any text
function shorten_txt($text, $limit) {
	if (str_word_count($text, 0) > $limit) {
		$words = str_word_count($text, 2);
		$pos = array_keys($words);
		$text = substr($text, 0, $pos[$limit]) . '...';
	}
	return $text;
}


function generate_social_media_tags($site_title, $site_desc, $site_logo, $this_post){

	// get Image for Post
	if($this_post['featured_path']) $this_post_img = $this_post['featured_path'];
	else $this_post_img = $site_logo;

	// get Image for Post
	if($this_post['slug']) $this_post_slug = $this_post['slug'];
	else $this_post_slug = '';

	// get Content for Post
	if ($this_post['content']) $full_content = $this_post['content'];
	else $full_content = $site_desc;

	$domain_name = $_SERVER['HTTP_HOST'];

	// get excerpts
	$large_excerpt = get_excerpt($full_content, 300, "article");
	$small_excerpt = get_excerpt($full_content, 200, "article");

	$output = '
	<!-- call social og tags -->

			<meta property="og:type" content="article" />

			<!-- search -->
			<meta itemprop="description" content="'.$small_excerpt.'">
			<meta itemprop="image" content="/images/'.$this_post_img.'">

			<!-- facebook/google+/search -->
			<meta property="og:title" content="' . $this_post_title . '" />
			<meta property="og:site_name" content="' . $site_title  . '" />
			<meta property="og:image" content="http://'.$domain_name.'/images/' . $this_post_img  . '" />
			<meta property="og:description" content="'.$large_excerpt.'" />
			<meta property="og:url" content="http://'.$domain_name.'/images/' . $this_post_slug  . '" />

			<!-- twitter -->
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@'.$domain_name.'" />
			<meta name="twitter:title" content=" ' . $this_post_title  . '" />
			<meta name="twitter:image" content="http://'.$domain_name.'/images/' . $this_post_img  . '" />
			<meta name="twitter:description" content="' . $large_excerpt . '" />

		<!-- End call social og tags -->
		';
	return $output;
}

function dump_data($data){
	echo "<pre>";
	var_dump($data);
	echo "</pre>";
}

function display_menu($which_menu){
	$menu_meta = "includes/menus.php";
	$menu_meta = file_get_contents($menu_meta);
	$menu_meta = json_decode($menu_meta, TRUE);
	$menu_meta = $menu_meta[$which_menu];
	return $menu_meta;
}

function get_site_config($field){
	$config_data = "includes/site_config.php";
	$config_data = file_get_contents($config_data);
	$config_data = json_decode($config_data, TRUE);
	$count_data = count($config_data);

	$static_fields = array("site_title", "site_description", "site_keywords");
	if(in_array($field, $static_fields)){
		return $config_data[0][$field];
	}
	$ii = 0;
	for($ii = 0; $ii <= $count_data; $ii++){
		$check = $config_data[$ii]["config_key"];
		if($check == $field) return $config_data[$ii]["config_value"];
	}
}

function get_search_results($query){

	$content_meta = "includes/content.php";
	$content_meta = file_get_contents($content_meta);
	$content_meta = json_decode($content_meta, TRUE);

	$results = array();
	foreach($content_meta as $metas){
		$title_result = stristr($metas['title'], $query);
		if($title_result) array_push($results, $metas['slug']);
		else {
			$contents = "includes/".$metas['slug'].".php";
			$contents = file_get_contents($contents);
			$contents = json_decode($contents, TRUE);
			$content_result = stristr($contents['block1'], $query);
			if($content_result) array_push($results, $metas['slug']);
		}
	}
	return $results;
}

// show stars function
	// @Stars to Show, Highest Ranking, Show Empty Stars (Boolean), Full Star HTML, Empty Star HTML
function show_stars($total_stars, $max_stars, $full_star, $empty_star = '', $half_star = ''){

	$empty_stars = $max_stars - $total_stars;
	$to_return = '';
	for($count =1; $count <= $total_stars; $count++){
		$to_return.= $full_star;
	}

	// show half star?
	if($half_star != ''){
		if (strpos($total_stars,'.5') !== false) {
			$to_return.= $half_star;
		}
	}

	if($empty_star != ''){
		for($count =1; $count <= $empty_stars; $count++){
			$to_return.= $empty_star;
		}
	}
	return $to_return;
}
?>
