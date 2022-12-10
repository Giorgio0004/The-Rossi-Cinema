<?php
session_start();



$responseData = [
    "Film" => $_SESSION["Film"],
    "Posti" => $_SESSION["posti"],
    "Prezzo" => $_SESSION["prezzoTotale"],
];

header("Content-Type: application/json");
echo json_encode($responseData);

?>