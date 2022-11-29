#!/usr/local/bin/php

<?php

    $mysqli=new mysqli('mysql.cise.ufl.edu', 'nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}

$userID=$mysqli->real_escape_string($_POST['uid']);
$sce=$mysqli->real_escape_string($_POST['sce']);
$mpop1 = htmlentities($_POST['mov1']);
$msocial1 = htmlentities($_POST['mov2']);
$mevent1 = htmlentities($_POST['mov3']);
$mpop2 = htmlentities($_POST['mov4']);
$msocial2 = htmlentities($_POST['mov5']);
$mevent2 = htmlentities($_POST['mov6']);
$mpop3 = htmlentities($_POST['mov7']);
$msocial3 = htmlentities($_POST['mov8']);
$mevent3 = htmlentities($_POST['mov9']);
$mpop4 = htmlentities($_POST['mov10']);
$msocial4 = htmlentities($_POST['mov11']);
$mevent4 = htmlentities($_POST['mov12']);
$mpop5 = htmlentities($_POST['mov13']);
$msocial5 = htmlentities($_POST['mov14']);
$mevent5 = htmlentities($_POST['mov15']);

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

$sql="INSERT INTO movieratings (userID, sce, pop1, pop2, pop3, pop4, pop5,
social1, social2, social3, social4, social5, event1, event2, event3, event4, event5)
VALUES('$userID', '$sce','$mpop1', '$mpop2', '$mpop3','$mpop4','$mpop5','$msocial1',
'$msocial2','$msocial3','$msocial4','$msocial5','$mevent1',
'$mevent2','$mevent3','$mevent4','$mevent5')";

$insert=$mysqli->query($sql);

$sql1="INSERT INTO mtimers (userID, pop1, pop2, pop3,pop4, pop5,
social1, social2, social3, social4, social5, event1, event2, event3,event4, event5)
VALUES ('$userID','$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7', '$t8',
'$t9', '$t10', '$t11', '$t12', '$t13', '$t14','$t15')";

$insert1=$mysqli->query($sql1);

if($insert&&$insert1){
  //echo "<a href='measures.php'>Next page</a>";
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
    <script>
    var conditions=['popTemp.png', 'socialTemp.png','eventTemp.png'];
    conditions.sort(() => Math.random() - 0.5);
    localStorage.setItem("cdt1",conditions[0]);
    localStorage.setItem("cdt2",conditions[1]);
    localStorage.setItem("cdt3",conditions[2]);

    </script>
  </head>
  <body>
    <h3 style="text-align:center">Press the NEXT button below to the next part of the study:</h3>
    <a class="next" href='measures.html'><br>NEXT</br></a>
  </body>
  </html>
