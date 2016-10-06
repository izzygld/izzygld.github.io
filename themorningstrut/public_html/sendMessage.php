<?php

// collect data from POSTed form
// $to = Trim(stripslashes($_POST['to']));

$email = Trim(stripslashes($_POST['email']));

$name = Trim(stripslashes($_POST['name']));

$message = Trim(stripslashes($_POST['message']));

$return = Trim(stripslashes($_POST['return']));

// create subject
$this_site = explode("@", $to);
$this_site = $this_site[1];
$subject = "Mail From: themorningstrut.com";

// prepare email body text

$body = "";

$body .= "Email From: ";

$body .= $email;

$body .= "\n";

$body .= "Name: ";

$body .= $name;

$body .= "\n";

$body .= "Subject: ";

$body .= $subject;

$body .= "\n";

$body .= "\n";

$body .= "Message: ";

$body .= $message;

$body .= "\n";

$headers = "From: " . $to;



$to = "izzygld@gmail.com";
$from = "mail@themorningstrut.com";


$headers = "From: $from\r\nReply-to: $email";



// send mail, return to target Success page, or report error_get_last
if(@mail($to, $subject, $body, $headers)) {
  $return_location = "Location: " . $return;
  header($return_location);
}
else echo "Mail Not Sent";


?>
