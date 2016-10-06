  <?php
//Featured Category Loop
                        $query_args = array(
                            "order_by" => "publish_date",
                            "direction" => "asc",
                            "posts_per_page" => 1
                        );
                        $query_posts = new get_posts;
                        $loop_posts = $query_posts->show_blog($query_args);

                include ($section_one_sidebar_bottom);
                ?>
 <div class="col-ad-1" id="join">
      <div class="heading">
        <a href="/">

        Themorningstrut


    </a> NEWSLETTER
      </div>
      <p>Subscribe today to the Themorningstrut Daily newsletter</p>


      <div id="page-wrapper">


<!--     testing out ajax
 -->
    <div id="form-messages"></div>

    <form class="sml_subscribe" id="ajax-contact" method="post" action="mailer_newsletter.php">


      <div class="field">
        <p class="sml_email">

        <input type="email" id="email" name="email"
        placeholder="Email Address..." required>

        </p>
      </div>



      <div class="field">
         <p class="sml_submit">
        <!-- <button class="btn sml_submitbtn" type="submit">Send</button> -->
           <input name="submit" class="btn sml_submitbtn" type="submit">
         </p>
      </div>
    </form>
  </div>
  <!--   end  testing out ajax
 -->


      <!-- <form class="sml_subscribe" method="post" action="mailer_newsletter.php">
        <p class="sml_email">
          <label class="sml_emaillabel" for="sml_email"></label>
          <input class="sml_emailinput" name="sml_email1" id="email"
          placeholder="Email Address..." type="email" value="" required>
          </p>
          <p class="sml_submit">
            <input name="submit" class="btn sml_submitbtn" type="submit" value="Submit">
            </p>
          </form> -->



        </div>
        <div class="col-ad-1" style="margin-top: 0px!important;"></div>



  <?php
$this_menu = display_menu('section_one_sidebar_top');
$request_slug = trim($_SERVER['REQUEST_URI'],"/");
$count = 1;
foreach($this_menu as $menu_posts){
  // Don't show the user requested article in this loop
  if(($request_slug != $menu_posts['slug']) && $count <= 4) { ?>
  <!-- sidebars right handside bar
 -->
  <div class="col-ad-1">
    <div class="link">
      <a href="
        <?php echo $menu_posts['slug'] ?>">
        <?php echo $menu_posts['title'] ?>
      </a>
    </div>
    <div class="linkimg">
      <a href="
        <?php echo $menu_posts['slug'] ?>">
        <div class="su-custom-gallery su-custom-gallery-title-hover media-image">
          <div class="su-custom-gallery-slide">
            <img src="/images/<?php echo $menu_posts['featured_path'] ?>" alt="
              <?php echo $menu_posts['featured_alt'] ?>" width="300" height="200"/>
              <span class="su-custom-gallery-title">
                <?php echo $menu_posts['title'] ?>
              </span>
            </div>
            <div class="su-clear"></div>
          </div>
        </a>
      </div>
    </div>

    <?php
  $count++;
  }
}
?>


 <?php
    include ($side_footer_links);
    include ($social_links);

    ?>