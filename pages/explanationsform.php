#!/usr/local/bin/php

<?php

    $mysqli=new mysqli('mysql.cise.ufl.edu', 'nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}
$userID=$mysqli->real_escape_string($_POST['uid']);
$sce=$mysqli->real_escape_string($_POST['sce']);
$pop1 = htmlentities($_POST['exp0']);
$social1 = htmlentities($_POST['exp1']);
$event1 = htmlentities($_POST['exp2']);
$pop2 = htmlentities($_POST['exp3']);
$social2 = htmlentities($_POST['exp4']);
$event2 = htmlentities($_POST['exp5']);
$pop3 = htmlentities($_POST['exp6']);
$social3 = htmlentities($_POST['exp7']);
$event3 = htmlentities($_POST['exp8']);
$pop4 = htmlentities($_POST['exp9']);
$social4 = htmlentities($_POST['exp10']);
$event4 = htmlentities($_POST['exp11']);
$pop5 = htmlentities($_POST['exp2']);
$social5 = htmlentities($_POST['exp13']);
$event5 = htmlentities($_POST['exp14']);


$t1=$mysqli->real_escape_string($_POST['timer1']);
$t2=$mysqli->real_escape_string($_POST['timer2']);
$t3=$mysqli->real_escape_string($_POST['timer3']);
$t4=$mysqli->real_escape_string($_POST['timer4']);
$t5=$mysqli->real_escape_string($_POST['timer5']);
$t6=$mysqli->real_escape_string($_POST['timer6']);
$t7=$mysqli->real_escape_string($_POST['timer7']);
$t8=$mysqli->real_escape_string($_POST['timer8']);
$t9=$mysqli->real_escape_string($_POST['timer9']);
$t10=$mysqli->real_escape_string($_POST['timer10']);
$t11=$mysqli->real_escape_string($_POST['timer11']);
$t12=$mysqli->real_escape_string($_POST['timer12']);
$t13=$mysqli->real_escape_string($_POST['timer13']);
$t14=$mysqli->real_escape_string($_POST['timer14']);
$t15=$mysqli->real_escape_string($_POST['timer15']);


$sql="INSERT INTO explanationratings (userID,sce, pop1, pop2, pop3,pop4, pop5,
social1, social2, social3, social4, social5, event1, event2, event3,event4, event5)
VALUES('$userID', '$sce', '$pop1', '$pop2', '$pop3', '$pop4', '$pop5',
  '$social1', '$social2','$social3', '$social4','$social5',
  '$event1', '$event2','$event3', '$event4','$event5')";

$insert=$mysqli->query($sql);

$sql1="INSERT INTO timers (userID, pop1, pop2, pop3,pop4, pop5,
social1, social2, social3, social4, social5, event1, event2, event3,event4, event5)
VALUES ('$userID','$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7', '$t8',
'$t9', '$t10', '$t11', '$t12', '$t13', '$t14','$t15')";

$insert1=$mysqli->query($sql1);
if($insert && $insert1){
  //echo "<a href='movies.php'>Next page</a>";
}



else{
echo '<h3 style="text-align:center;">Error message</h3>';
}
?>
<html>

  <head>
    <meta charset="utf-8">
    <title>MovRec</title>
    <link rel="stylesheet" href="../styles/style.css" type="text/css">
  </head>
  <body>
    <h3 style="text-align:center">Press the NEXT button below to the next part of the study:</h3>
    <a class="next" href='movies.html'><br>NEXT</br></a>
  </body>
  </html>
