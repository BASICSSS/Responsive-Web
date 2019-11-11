<?php

echo "<script> alert('test!!!'); </script>";


include "db_c.php";

$id = $_POST['id'];

$sql = "SELECT * FROM add_user WHERE id = '{$id}'";

$res = $database -> query($sql);

if( res->num_rows >= 1){
    echo json_encode(array('res'=>'bad'));
}
else{
    
echo json_encode(array('res'=>'good'));
    
} 

?>
    