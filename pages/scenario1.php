#!/usr/local/bin/php

<?php

    $mysqli=new mysqli('mysql.cise.ufl.edu', 'nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}

$userID=$mysqli->real_escape_string($_POST['userID']);
$motiv1=$mysqli->real_escape_string($_POST['likert1']);
$motiv2=$mysqli->real_escape_string($_POST['likert2']);
$motiv3=$mysqli->real_escape_string($_POST['likert3']);
$motiv4=$mysqli->real_escape_string($_POST['likert4']);
$motiv5=$mysqli->real_escape_string($_POST['likert5']);
$motiv6=$mysqli->real_escape_string($_POST['likert6']);
$motiv7=$mysqli->real_escape_string($_POST['likert7']);
$motiv8=$mysqli->real_escape_string($_POST['likert8']);
$motiv9=$mysqli->real_escape_string($_POST['likert9']);
$motiv10=$mysqli->real_escape_string($_POST['likert10']);
$motiv11=$mysqli->real_escape_string($_POST['likert11']);
$motiv12=$mysqli->real_escape_string($_POST['likert12']);
$motiv13=$mysqli->real_escape_string($_POST['likert13']);
$motiv14=$mysqli->real_escape_string($_POST['likert14']);
$motiv15=$mysqli->real_escape_string($_POST['likert15']);

$gender=$mysqli->real_escape_string($_POST['gender']);
$occupation=$mysqli->real_escape_string($_POST['occupation']);
$hobby=$mysqli->real_escape_string($_POST['hobby']);
$event1=$mysqli->real_escape_string($_POST['event1']);
$event1cat=$mysqli->real_escape_string($_POST['event1cat']);

//insert Database
//$motivs="INSERT INTO motivs(userID, motiv1, motiv2, motiv3,motiv4, motiv5,motiv6, motiv7, motiv8, motiv9, motiv10, motiv11, motiv12,motiv13, motiv14, motiv15)
  //  VALUES('$userID','$motiv1','$motiv2','$motiv3','$motiv4','$motiv5','$motiv6','$motiv7','$motiv8','$motiv9','$motiv10','$motiv11','$motiv12','$motiv13','$motiv14','$motiv15')";
//->query() is used to create a database

//$insert0=$mysqli->query($motivs);
//echo "test";
  //{$mysqli->real_escape_string($_POST['likert1'])}
$sql1="INSERT INTO bg_ques(userID,motiv1, motiv2, motiv3,motiv4, motiv5,motiv6, motiv7, motiv8, motiv9, motiv10, motiv11, motiv12,motiv13, motiv14, motiv15, gender, occupation, hobby, event1, event1cat)
    VALUES('$userID','$motiv1','$motiv2','$motiv3','$motiv4','$motiv5','$motiv6','$motiv7','$motiv8','$motiv9','$motiv10','$motiv11','$motiv12','$motiv13','$motiv14','$motiv15',
      '$gender','$occupation','$hobby','$event1','$event1cat')";


$insert1=$mysqli->query($sql1);

if ($insert1){

}
else{
  die("Error: {$mysqli->errno}:{$mysqli->error}");
}

$mysqli->close();
?>

<html>

  <head>
    <meta charset="utf-8">
    <title>MovRec</title>
    <link rel="stylesheet" href="../styles/main.css" type="text/css">

</head>
<body>
  <div class="grid">
    <h3>For the next part of the study, please imagine and take
    into account the following scenario:</h3>

    <h3 id="sce"></h3>
    <script>
var scenarios=[
       	"Things are not going too well in your life right now, and you decide to watch a movie to hopefully lift your spirits a bit.",
	"You are curious about something, and you want to watch a movie to learn about it.",
"It's a Saturday night. You want to watch a movie to relax and have fun."];

    var x = Math.floor((Math.random() * 3));

    var scenario=scenarios[x];

    localStorage.setItem("sce",scenario);
    document.getElementById("sce").innerHTML=scenario;
    </script>
    <a class="next" href='explanations.html'><br>Start</a>
  </div>
</body>
</html>
