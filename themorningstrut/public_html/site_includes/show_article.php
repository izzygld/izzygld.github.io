<?php
$sitePage = 'show_article';
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
?>

<div class="container-fluid">
<div class="container">
<div class="main-wrapper">
<div class="wrapper">
<div class="row">




<div class="col-md-6" id="maincontent">



<div id="shop_product_list">
<main id="main" class="site-main" role="main">
<article id="post-568866" class="post-568866 post type-post status-publish format-standard hentry tag-domestic-science tag-soap tag-soaps sections-bathrooms sections-domestic-science sections-home-inspiration issues-small-is-good">

<header class="entry-header">
<h1 class="entry-title"><?php echo $this_post['title'] ?></h1> </header>
<p class="date"><?php echo convert_publish_date($this_post['publish_date'], "F d, Y") ?></p>
<p class="by"><span class="bold black">BY </span><span class="bold green capitalize"><a href="<?php echo get_author_slug($this_post['site_author']) ?>">

    <?php echo $this_post['site_author'] ?>  </a></span></p>

<div style='clear: both'></div>


<?php
include ($show_article_social_links);
?>




<div style="clear:both"></div>




<div style='clear: both'></div>

<p class="p1" style="text-align: justify;"><?php echo $this_post['content'] ?>
</p>

<!-- <p class="p1" style="text-align: justify;"><a href="http://www.remodelista.com/products/tamanohada-welcome-soap-white-fish-lily/" rel="attachment wp-att-570904"><img class="alignnone size-full wp-image-570904" src="http://www.remodelista.com/wp-content/uploads/2016/04/welcome-fish-soap-remodelista.jpg" alt="welcome-fish-soap-remodelista" width="733" height="550" srcset="http://www.remodelista.com/wp-content/uploads/2016/04/welcome-fish-soap-remodelista.jpg 733w, http://www.remodelista.com/wp-content/uploads/2016/04/welcome-fish-soap-remodelista-300x225.jpg 300w, http://www.remodelista.com/wp-content/uploads/2016/04/welcome-fish-soap-remodelista-160x120.jpg 160w" sizes="(max-width: 733px) 100vw, 733px"/></a></p> -->










</article>


</div>


</main>





<!-- include here the bottom menu
 -->




    <?php
    include ($show_article_bottom_menu);
    ?>







</div>


<!-- end of container show article -->



<div class="col-md-2" id="sidebar-home">

<?php
include ($section_one_sidebar_top);
?>

</div>

<!-- end of sidebar -->
</div>









</div>


<!-- end of sidebar and show article container
 -->
                </div>
            </div>
        </div>
    </div>
</div>


