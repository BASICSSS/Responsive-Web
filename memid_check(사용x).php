<?php

echo "<script> alert('test!!!'); </script>";


include "dbConnect.php";

$id = $_POST['id'];

$sql = "SELECT * FROM add_user WHERE id = '{$id}'";

$res = $dbConnect -> query($sql);

if( res->num_rows >= 1){
    echo json_encode(array('res'=>'bad'));
}
else{
    
echo json_encode(array('res'=>'good'));
    
} 

?>
    