<?php

include "database.php";


if($_POST['id'] != NULL){
$id_check = mq("select * from add_user where id = '{$_POST['id']}'");
$id_check = $id_check -> fetch_array();

if($id_check >=1){

    echo json_encode(array("idCheck" => '1'));

} else{
echo json_encode(array("idCheck" => '0'));
}
}
else{
    echo json_encode(array("idCheck" => '2'));
}
?>
