<?php

include_once($walla_path);
if($site_page == 'article'){

    $this_page = $_SERVER['REQUEST_URI'];
    $this_request = new request;
    $request = $this_request->parse_request($this_page);

    if($request["type"] == "slug") {
        $query_args = $this_request->build_query($request);
        $article = new get_posts;
        $this_post = $article->show_blog($query_args);
        $this_post = $article->show_one_article($this_post);
    }
}

// site constants
$site_title = get_site_config('site_title');
$site_desc = get_site_config('site_description');
$site_keywords = get_site_config('site_keywords');
$site_logo = '';

// get page title
$this_page_title = $site_title;
if($this_post['title']) $this_page_title = $this_post['title'];

//get meta description for site, if page meta is not set
$this_meta_desc = $site_desc;
if($this_post['meta_desc']) $this_meta_desc = $this_post['meta_desc'];

//get meta keywords for site, if meta keywords are not set
$this_keywords = $site_keywords;
if($this_post['meta_keywords']) $this_keywords = $this_post['meta_keywords'];

// get social media OG, etc., Tags
$social_media_tags = generate_social_media_tags($this_page_title, $this_meta_desc, $site_logo, $this_post);

// include ($site_config);
// include ($site_content);

?>
<?php if ($page == '404') { ?>
    <meta name="description" content="404 Page Not Found | <?php echo $site_title;?>">
<?php } ?>


<?php
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title><?php echo $site_title ?></title>
    <meta name="description" content="<?php echo $site_desc ?>"/>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'/>
        <link rel='stylesheet'  href='/assets/css/style.css' type='text/css' media='all' />
        <link rel='stylesheet'  href='/assets/css/bootstrap.min.css' type='text/css' media='all' />
        <link rel='stylesheet'  href='/assets/css/custom.css' type='text/css' media='all' />

<!-- Latest compiled and minified CSS -->
<!-- <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 -->



    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Crimson+Text' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Gudea:400,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>

        <script src="https://use.fontawesome.com/d18c3245b4.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

        <script src="/send_email_newsletter.js"></script>


    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">

    <meta name="robots" content="noindex, nofollow" />

</head>

<body>


    <nav class="navbar navbar-default" id="header-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img id="logo" class="img-responsive" src="/assets/images/Social_icons/logo1.png">
                </a>
                <form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="/">
                    <div class="input-group">
                        <input type="hidden" name="post_type" value="post"/>
                        <input type="search" class="form-control search-field" autocomplete="off" id="searchf" placeholder="Search" name="s" value="">
                            <span class="input-group-btn">
                                <button class="btn btn-default search-submit" type="submit">
                                    <span class="fa fa-search" aria-hidden="true"></span>
                                </button>
                            </span>
                        </div>
                    </form>
                    <div id="advancedsearch"></div>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="dropdown">
                            <a href="/">HOME</a>
                        </li>
                        <li class="dropdown">
                            <a href="/blog.php">BLOG</a>
                        </li>
                        <li class="dropdown">
                            <a href="/contact.php">CONTACT US</a>
                        </li>

                        <li class="">
                            <a href="/about-us"  class="gardenistalink">ABOUT US</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" id="social-icons-top">

                        <?php
$social_excerpt = get_excerpt($this_post["content"], 300, "article");
$on_click = "window.open(this.href, 'mywin','left=0,top=0,width=700,height=500,toolbar=1,resizable=0,scrollbars=yes'); return false";
?>
                        <li>
                            <a href="https://pinterest.com/pin/create/button/?url=http%3A//themorningstrut.com&media=http%3A//themorningstrut.com/images/<?php echo $this_post['featured_path']; ?>&description=<?php echo $social_excerpt ?>" target="_blank"
onclick="<?php echo $on_click ?>">
    <img src="/assets/images/Social_icons/social-pinterest.png"/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Share on Facebook" onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-facebook.png"/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/intent/tweet?text=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Tweet" onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-twitter.png"/></a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/share?url=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Share on Google+"  onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-instagram.png"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>