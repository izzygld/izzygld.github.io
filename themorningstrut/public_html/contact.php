<?php
$sitePage = 'contact';
//SITE PATHS INCLUDE (inside php)
$doc_root = $_SERVER['DOCUMENT_ROOT'];
$site_paths = $doc_root.'/site_includes/sitePaths.php';
include ($site_paths);
include ($header_path);
?>

<script type="text/javascript">
$(document).ready(function()
{
  // var message = "<header class='bd-page-hero--bordered'><div class='row'><div class='col-sm-5 col-xs-12'><div class='bd-embed-responsive-page-hero' style='background-image:url(\"/assets/images/mommy-authority-contact.jpg\");'></div></div><div class='col-sm-7 col-xs-12'><div class='bd-page-hero-content'><h1 class='bd-page-title'>Thank You for Contacting Mommy Authority</h1><p class='bd-page-description'></p><p>Someone will get back with you shortly.</p><p></p></div></div></div></header>";

  $(document).on('submit', '#contactForm', function() {
    var data = $(this).serialize();


    $.ajax({
      type : 'POST',
      url  : '../form_processors/sendMessage.php',
      data : data,
      success :  function(data){
        switch(data){

          case "success":
            $("#contactForm").fadeOut(500).hide(function(){
              $(".result").fadeIn(500).show(function(){
                // var email_success = message;
                $(".result").html(email_success);
              });
            });
          break;

          case "no_send":
          break;

          case "no_creds":
          break;

          default:
          break;
        }
      },
    });
    return false;
  });
});

</script>


<div class="container-fluid">
<div class="container">
<div class="main-wrapper">
<div class="wrapper">
<div class="row">




<div class="col-md-6" id="maincontent">







<div class="contact_form">
<form id="contact_form" action="/sendMessage.php" method="POST">
  <div class="row">
    <label for="name">Your name:</label><br />
    <input id="name" class="input" name="name" type="text" value="" size="30" required/><br />
  </div>
  <div class="row">
    <label for="email">Your email:</label><br />
    <input id="email" class="input" name="email" type="text" value="" size="30" required/><br />
  </div>
  <div class="row">
    <label for="message">Your message:</label><br />
    <textarea style="color:black;" id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
  </div>
  <div class="contact_form_button" style="color:black;">
<!--   <input id="submit_button" type="submit" name="submit"  value="Send email" required/>
 --> <input type="submit" id="submit_button" class="btn" value="Submit">


 <input type="hidden" name="to" value="izzygld@gmail.com" />
        <input type="hidden" name="return" value="/messageSent.php" />
</div>
</form>






    </div>


    <?php
    include ($show_article_bottom_menu);
    ?>
</div>


<div class="col-md-2" id="sidebar-home">

<?php
include ($section_one_sidebar_top);
?>

</div>

</div>
</div>
</div>
</div>
</div>



