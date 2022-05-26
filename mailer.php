<?php
include(index.php)

$name = htmlentities($_POST['subject'])
$mail = htmlentities($_POST["mail"])
$msg = htmlentities($_POST['msg'])

$destination = "offeyo528@gmail.com"
<<<<<<< HEAD
$headers = ["from" => $mail]

mail($destination, $name, $smg, $headers)
?>

=======
$headers = "From".$mail
mail($destination, $name, $smg, $headers)
or die("Error Occured")
?>
>>>>>>> efdcbf4edf733068e182b63cbdf9a804f66fd40d
