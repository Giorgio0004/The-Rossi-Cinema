<?php
    $data = json_decode(file_get_contents('php://input'));
    $msg = $data['message'];

    if($msg == 'exit'){
        session_destroy();
    }
?>