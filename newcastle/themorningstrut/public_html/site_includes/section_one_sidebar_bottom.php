<div class="col-ad-1" id="firmday">
<div class="heading">POST OF THE DAY</div>

<?php
  foreach($loop_posts as $this_post){
    // don't include the following page

    if ($this_post['show_next']) $loop_next = $this_post['show_next'];
    if ($this_post['show_prev']) $loop_previous = $this_post['show_prev'];

    $dont_display = array('5766');
    if (in_array($this_post['content_id'], $dont_display))  { }
  else {
?>


<a href="<?php echo $this_post['slug'] ?>">

    <?php
              if($this_post['featured_path'] != '') {
                echo '<img src="/images/'.$this_post['featured_path'].'" alt="'.$this_post['featured_alt'].'" class="img-responsive"/>';
              } else {
                echo '<img src="http://placehold.it/300x225" alt="'.$this_post['featured_alt'].'" class="img-responsive"/>';
              }
      ?>
</a>
<p class="para"><?php echo $this_post['site_author'] ?></p>

<a href="<?php echo $this_post['slug'] ?>">
    View article&nbsp;&nbsp;&nbsp;&nbsp;&raquo;</a>


<?php
    }
  }
?>
</div>


