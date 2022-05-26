<?php
include(index.php)

$name = htmlentities($_POST['subject'])
$mail = htmlentities($_POST["mail"])
$msg = htmlentities($_POST['msg'])

$destination = "offeyo528@gmail.com"
$headers = ["from" => $mail]

mail($destination, $name, $smg, $headers)
or die("Error Occured")
?>

