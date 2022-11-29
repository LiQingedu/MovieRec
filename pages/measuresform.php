#!/usr/local/bin/php

<?php

    $mysqli=new mysqli('mysql.cise.ufl.edu', 'nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}

$userID=$mysqli->real_escape_string($_POST['userID']);
$cdt=$mysqli->real_escape_string($_POST['cdt1']);
$q1 = htmlentities($_POST['q1']);
$q2 = htmlentities($_POST['q2']);
$q3 = htmlentities($_POST['q3']);
$q4 = htmlentities($_POST['q4']);
$q5 = htmlentities($_POST['q5']);
$open=$mysqli->real_escape_string($_POST['open']);

//$result = saveData($q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10, $q11);
$sql="INSERT INTO measure0(userID, cdt,
   q1, q2, q3, q4, q5, open)
   VALUES('$userID', '$cdt',
   '$q1', '$q2', '$q3', '$q4','$q5','$open')";

   $insert=$mysqli->query($sql);
   if ($insert){

   }

else{
   echo '<h3 style="text-align:center;">Error message</h3>';
}
?>
<html>

<head>
<meta charset="utf-8">
<title>MovRec</title>
<link rel="stylesheet" href="../styles/main.css" type="text/css">

</head>
<body>
  <h3 style="text-align:center">Press the NEXT button below to the next part of the study:</h3>
<a class="next" href='measures1.html'><br>NEXT</br></a>
</body>
</html>
