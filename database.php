 <?php
  session_start();
  
  $db = new mysqli("localhost","root","grace670*","mysql");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>