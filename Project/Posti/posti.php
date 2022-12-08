<?php

require_once "../dbConfig.php";

global $dbh;
    
$data = json_decode(file_get_contents('php://input'), true);
$user = $data['id'];

$sql = "SELECT Posto,ID_User FROM posti WHERE ID_Sessione = 1";
$query = $dbh->prepare($sql);
//Execute the query:
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$responseData = [
    "success" => $results
];

header("Content-Type: application/json");
echo json_encode($responseData);

?>