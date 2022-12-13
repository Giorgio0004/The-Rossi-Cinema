<?php
    session_start();

    if($_SESSION["LogIn"]==true)
    {
        $_SESSION["IDUtente"] = "";
        $_SESSION["Utente"]="";
        $_SESSION["LogIn"]==false;
        //session_destroy();
    }
    

    $responseData = [
        "success" => "OK"
    ];
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
?>