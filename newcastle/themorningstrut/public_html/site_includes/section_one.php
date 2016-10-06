

<div class="container-fluid homebg">
    <div class="container">
        <div class="main-wrapper">
            <div class="wrapper">
                <div class="row">
                    <div class="col-md-6 home_container" id="maincontent">
                        <div id="homepageposts">
                            <?php
  foreach($loop_posts as $this_post){
    // don't include the following page

    if ($this_post['show_next']) $loop_next = $this_post['show_next'];
    if ($this_post['show_prev']) $loop_previous = $this_post['show_prev'];

    $dont_display = array('8798');
    if (in_array($this_post['content_id'], $dont_display))  { }
  else {
?>
                            <div class="post horizontal box effect8">
                                <a href="
                                    <?php echo $this_post['slug'] ?>">
                                    <?php
                                    if($this_post['featured_path'] != '') {
                      echo '
                                    <img style="max-width:100%;" width="860" height="380" class="img-responsive" src="/images/'.$this_post['featured_path'].'" alt="'.$this_post['featured_alt'].'"/>';
                    } else {
                      echo '
                                    <img src="/assets/images/Social_icons/logo1.png" alt="'.$this_post['featured_alt'].'" />';

                    }
                  ?>
                  </a>
           <div class="post-content">
               <h1>
                   <a href="
                       <?php echo $this_post['slug'] ?>" class="title">
                            <?php echo $this_post['title'] ?>
                                    </a>
                                  </h1>
                  <div class="row">
                          <p class="publishedby pull-left">By
                                            <a href="
                                                <?php echo get_author_slug($this_post['site_author']) ?>">
                                                <?php echo $this_post['site_author'] ?>
                                            </a>
                                        </p>
                                        <p class="publishedat pull-right">

                                            Published On
                                            <?php echo convert_publish_date($this_post['publish_date'], "F j, Y") ?>
                                        </p>
                                    </div>


                                    <p class="readmore pull-right">
                                        <a href="<?php echo $this_post['slug'] ?>">Read More</a>
                                    </p>
                                </div>
                            </div>
                            <?php
    }
  }
?>
                        </div>
                        <?php
        include ($pagination);
            ?>
                    </div>




<div class="col-md-2 home_container sidebar-homess" id="sidebar-home">

<?php
        include ($section_one_sidebar_top);
            ?>









                </div>
                <!-- end of sidebar -->
            </div>
        </div>
    </div>
</div>


<!-- end of real sidebar -->
</div>

