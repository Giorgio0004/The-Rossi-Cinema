<?php
session_start();
require_once "../dbconfig.php";

$data = json_decode(file_get_contents('php://input'), true);

if($data==null){
    if(isset($_SESSION['Utente'])){
        $responseData = [
            "Film" => $_SESSION["idSessione"],
            "Posti" => $_SESSION["posti"],
            "Prezzo" => $_SESSION["prezzoTotale"],
            "Utente" => $_SESSION["Utente"]
        ];
    }
    else{
        $responseData = [
            "Film" => $_SESSION["idSessione"],
            "Posti" => $_SESSION["posti"],
            "Prezzo" => $_SESSION["prezzoTotale"],
        ];
    }
    
    
    header("Content-Type: application/json");
    echo json_encode($responseData);
}
else{
    if($_SESSION["IDUtente"]==null || $_SESSION["IDUtente"]==""){
        $responseData = [
            "success" => "NO"
        ];
        
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
    else
    {
        $posti = $_SESSION["posti"];
        $IDSessione = $_SESSION["idSessione"];
        $Utente =$_SESSION["IDUtente"];

        //var_dump($IDSessione["ID"]);

        for($i=0; $i< sizeof($posti); $i++){
            $sql="INSERT INTO `posti`(`Posto`, `ID_Sessione`, `ID_User`) VALUES (:posto,:sessionID,:user)";
            $query = $dbh->prepare($sql);
            // Bind the parameters
            $query->bindParam(':posto',$posti[$i],PDO::PARAM_STR);
            $query->bindParam(':sessionID',$IDSessione["ID"],PDO::PARAM_INT);
            $query->bindParam(':user',$Utente,PDO::PARAM_INT);
            // Query Execution
            $query->execute();
        }
        

        $responseData = [
            "success" =>"Ok"
        ];
        
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
}


?>