<?php

require_once "dbConfig.php";

global $dbh;
    
$data = json_decode(file_get_contents('php://input'), true);
$pw = $data['password'];
$email = $data['mail'];
$conferma = $data["confermaPassword"];


if(strlen($pw) < 8){
    $responseData = [
        "success" => false
    ];

    header("Content-Type: application/json");
    echo json_encode($responseData);
}
else if($pw != $conferma){
    $responseData = [
        "success" => false
    ];

    header("Content-Type: application/json");
    echo json_encode($responseData);
}
else
{
    ExecuteQuery($email, $pw);
}





function ExecuteQuery($eMail, $password){
    global $dbh;
    $sql = "UPDATE `utenti` SET Password = " . "'". $password . "'" . "WHERE Email = " . "'". $eMail ."'";
        try{
            $query = $dbh->prepare($sql);
            $query->execute();
            $responseData = [
                "success" => true
            ];
        
            header("Content-Type: application/json");
            echo json_encode($responseData);
            
        }
        catch(Exception $sql){
            exit();
        }
}

?>