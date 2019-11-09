<?php

include "db_c.php";

$id = $_POST['id'];

$sql = "select * from member where id = '{$id}'";

$res = $database -> query($sql);

if( res->num_rows >= 1){
    echo json_encode(array('res'=>'bad'));
}
else{
    
echo json_encode(array('res'=>'good'));
    
} 

?>
    