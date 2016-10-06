
 <div id="pubexchange_below">
<div class="pe-wrapper">
    <div class="pe-external">
        <div class="pe-title">Related Posts</div>






        <ul class="pe-module">

<?php
      $this_menu = display_menu('themorningstrut_menu');
      $request_slug = trim($_SERVER['REQUEST_URI'],"/");
      $count = 1;
      foreach($this_menu as $menu_posts){
        // Don't show the user requested article in this loop
        if(($request_slug != $menu_posts['slug']) && $count <= 4) { ?>




            <li class="pe-article">

                <div class="pe-thumb-wrapper">
                    <a style="width:174px;height:120px" class="pe-thumb" rel="nofollow"
                    href="<?php echo $menu_posts['slug'] ?>">

                    <img style="width:100%;margin-top:-2px" src="/images/<?php echo $menu_posts['featured_path'] ?>"
                    alt="<?php echo $menu_posts['featured_alt'] ?>" ></a>
                </div>

                <div class="pe-editorial">
                    <a class="pe-headline" rel="nofollow"
                    href="<?php echo $menu_posts['slug'] ?>">
                    <?php echo $menu_posts['title'] ?>
                </a>
                    <!-- <a class="pe-partner-name" rel="nofollow" target="_blank"
                    href="http://cupcakesandcashmere.com/series-stories/little-life-hacks-that-go-a-long-way"
                    data-url="http://cupcakesandcashmere.com/series-stories/little-life-hacks-that-go-a-long-way"
                    onmousedown="this.href='http://traffic.pubexchange.com/l/6d5ed1a9-4b9f-4200-a7e2-2829cb633023/f5b01456-43e4-479e-a366-6ab5c338166e/78330358-ee0f-4474-972c-53628fe9525e/f?u=cupcakesandcashmere.com';">
                    Cupcakes and Cashmere</a> --></div>
            </li>


 <?php
          $count++;
          }
        }
        ?>


        </ul>





    </div>

</div>

 </div>
