<?php
$social_excerpt = get_excerpt($this_post["content"], 300, "article");
$on_click = "window.open(this.href, 'mywin','left=0,top=0,width=700,height=500,toolbar=1,resizable=0,scrollbars=yes'); return false";
?>


<div class="sicons text-center">


<a href="https://pinterest.com/pin/create/button/?url=http%3A//themorningstrut.com&media=http%3A//themorningstrut.com/images/<?php echo $this_post['featured_path']; ?>&description=<?php echo $social_excerpt ?>" target="_blank"
onclick="<?php echo $on_click ?>">
    <img src="/assets/images/Social_icons/social-pinterest.png"/></a>
<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Share on Facebook" onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-facebook.png"/></a>

<a href="https://twitter.com/intent/tweet?text=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Tweet" onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-twitter.png"/></a>

<a href="https://plus.google.com/share?url=http%3A//themorningstrut.com/<?php echo $this_post['slug']; ?>" target="_blank" title="Share on Google+"  onclick="<?php echo $on_click ?>">
    <img  src="/assets/images/Social_icons/social-instagram.png"/></a>

</div>





