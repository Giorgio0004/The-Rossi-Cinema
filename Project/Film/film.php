<?php
session_start();
require_once "../dbConfig.php";

global $dbh;

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data["sql"])!=null){
    $sqlQuery= $data["sql"];
    

    $query = $dbh->prepare($sqlQuery);
    //Execute the query:
    $query->execute();
    $results=$query->fetchAll(PDO::FETCH_OBJ);
    
    $responseData = [
        "success" => $results,
        "Utente" => $_SESSION["Utente"]
    ];
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
}

else{
    $Sessione= $data["infoSessione"];
    $_SESSION["idSessione"] = $Sessione;
    

    $responseData = [
        "success" => "OK"
    ];
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
}



?>