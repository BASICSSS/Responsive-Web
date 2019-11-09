<?php

    include "database.php";

    /*$connect = mysql_connect("localhost","root","grace670*") or die("fail");  mysqli를 안썻을때*/
    $id=$_POST['id'];
    $pwd=$_POST['pwd'];
    $name=$_POST['name'];
    $email=$_POST['email'];

    $date = date('Y-m-d H:i:s');
    
    $sql = mq("insert into add_user (id,pwd,name,email) values('$id','$pwd','$name','$email')");

?>

<meta charset="utf-8" />
<script type="text/javascript">alert('회원가입이 완료되었습니다.');</script>
<meta http-equiv="refresh" content="0 url=/">
