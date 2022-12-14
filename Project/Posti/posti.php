<?php
session_start();
require_once "../dbConfig.php";

$data = json_decode(file_get_contents('php://input'), true);

if($data!=null){
    $_SESSION["posti"] = $data["postiSessione"];
    $_SESSION["prezzoTotale"] = $data["prezzo"];
    
    $responseData = [
        "success" => "OK"
    ];
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
}
else
{
    global $dbh;

    $Sessione = $_SESSION["idSessione"];
    $IDSessione=$Sessione["ID"];
    
    //var_dump($Sessione);
    
    $sql = "SELECT Posto,ID_User FROM posti WHERE ID_Sessione = ".$IDSessione;
    $query = $dbh->prepare($sql);
    //Execute the query:
    $query->execute();
    $results=$query->fetchAll(PDO::FETCH_OBJ);
    
    if(isset($_SESSION['Utente'])){
        $responseData = [
            "success" => $results,
            "dataSessione" =>$_SESSION["idSessione"],
            "Utente" => $_SESSION["Utente"]
        ];
    }
    else
    {
        $responseData = [
            "success" => $results,
            "dataSessione" =>$_SESSION["idSessione"],
            
        ];
    }
    
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
}



?>