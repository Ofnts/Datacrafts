<?php
$name = $_POST['subject']
$mail = $_POST["mail"]
$msg = $_POST['msg']
$destination = "offeyo528@gmail.com"
$headers = array("from" => $mail)
mail($destination, $name, $smg, $headers)
?>