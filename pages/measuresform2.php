#!/usr/local/bin/php

<?php

    $mysqli=new mysqli('mysql.cise.ufl.edu', 'nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}

$userID=$mysqli->real_escape_string($_POST['userID']);
$cdt=$mysqli->real_escape_string($_POST['cdt3']);
$q1 = htmlentities($_POST['q1']);
$q2 = htmlentities($_POST['q2']);
$q3 = htmlentities($_POST['q3']);
$q4 = htmlentities($_POST['q4']);
$q5 = htmlentities($_POST['q5']);
$open=$mysqli->real_escape_string($_POST['open']);

//$result = saveData($q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10, $q11);
$sql="INSERT INTO measure2(userID, cdt,
   q1, q2, q3, q4, q5, open)
   VALUES('$userID', '$cdt',
   '$q1', '$q2', '$q3', '$q4','$q5','$open')";

   $insert=$mysqli->query($sql);
   if ($insert){
     $codes=array('RFWO9CE9RW','ZS3ISQGCB3','AVSGNVC4DQ','0DGKQG4MCX', 'A7RYWEL7BR',
       'O1S844NOZ0', 'YR9Y3TET8E', '5NOEHBA52M', 'HIPU5AZAMJ', 'OPU73LM9TZ',
      'V6UU9EKPPJ', 'IYIIUF365W', 'FU4QYL931S', 'VESUYACTMC', 'XDT1L7HH6Z',
       '1P1S0DI10N', 'AQS6SO0HTZ', 'Y3EAIGZUFS', 'FIR1SC5GGQ', 'Z5EKFYWBB8');
       $rand=rand(0,19);
       $code=$codes[$rand];
     echo "<h2>Thank you for your participation.</h2><br>";
     echo "<h2>Enter the following code as a completion code in the
     MTurk task: $code</h2>";
   }

else{
   echo '<h3 style="text-align:center;">Error message</h3>';
}
?>
