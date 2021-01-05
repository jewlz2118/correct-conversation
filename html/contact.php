<?php

$firstname = $_POST['first-name'];
$lasttname = $_POST['last-name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "info@correctconversation.com";
$subject = "Tutorial";

mail ($to,$subject,$message);

		echo '<br>';
		echo " Thanks your message has been sent!";


?>