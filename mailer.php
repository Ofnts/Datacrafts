<?php
$name = $_POST['subject']
$mail = $_POST["mail"]
$msg = $_POST['msg']
$destination = "offeyo528@gmail.com"
$headers = "From".$mail
mail($destination, $name, $smg, $headers)
or die("Error Occured")
?>
