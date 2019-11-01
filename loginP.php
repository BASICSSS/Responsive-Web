<?php
    
    /*$connect = mysql_connect("localhost","root","grace670*") or die("fail");  mysqli를 안썻을때*/
    $mysqli = new mysqli("localhost","root","grace670*","mysql");
    $mysqli->set_charset("utf8");


    $id=$_POST['id'];
    $pwd=$_POST['pwd'];
    $name=$_POST['name'];
    $email=$_POST['email'];

    $date = date('Y-m-d H:i:s');
    
    $sql = "insert into ADD_USER (id, pwd, name, email)";
    $sql."values('$id', '$pwd', '$name', '$email')";

    if($mysqli->query($sql)){
      echo 'success inserting';
     }else{
      echo 'fail to insert sql';
     }

?>

