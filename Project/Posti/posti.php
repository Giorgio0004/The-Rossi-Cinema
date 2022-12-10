<?php
session_start();
require_once "../dbConfig.php";

global $dbh;

$Sessione = $_SESSION["idSessione"];
$IDSessione=$Sessione["ID"];

//var_dump($Sessione);

$sql = "SELECT Posto,ID_User FROM posti WHERE ID_Sessione = ".$IDSessione;
$query = $dbh->prepare($sql);
//Execute the query:
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$responseData = [
    "success" => $results,
    "dataSessione" => $Sessione
];

header("Content-Type: application/json");
echo json_encode($responseData);

?>