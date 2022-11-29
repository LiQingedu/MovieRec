#!/usr/local/bin/php
<?php
$mysqli=new mysqli('thunder.cise.ufl.edu','nr0','xcpxmjMM110','moviePrj');

if ($mysqli->connect_error){
  echo "connect fails";
  die('Connect error: '.$mysqli->connect_errno. ': '.$mysqli->connect_error);
}
?>
