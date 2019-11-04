 <?php
  session_start();
  
  $database = new mysqli("localhost","root","autoset","mysql");
  $database->set_charset("utf8");

  function mq($sql){
    global $database;
    return $database->query($sql);
  }

  ?>