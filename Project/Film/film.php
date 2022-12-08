<?php

require_once "../dbConfig.php";

global $dbh;
$data = json_decode(file_get_contents('php://input'), true);
$sqlQuery= $data["sql"];

$query = $dbh->prepare($sqlQuery);
//Execute the query:
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$responseData = [
    "success" => $results
];

header("Content-Type: application/json");
echo json_encode($responseData);

?>