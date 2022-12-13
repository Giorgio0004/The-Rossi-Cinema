<?php

require_once "../dbConfig.php";



$data = json_decode(file_get_contents('php://input'), true);
$username = $data['uR'];
$email = $data['eR'];
$password = $data['pR'];
$confermaPassword = $data['cpR'];



if($username!="" || $email!="" || $password!="" || $confermaPassword!="" )
{
    $utenteEsistente = GetSelectUtente($username);
    $emailEsistente = GetEmail($email);
    

    if(sizeof($utenteEsistente)!=0 || sizeof($emailEsistente) !=0){
        //echo "Nome Utente o email già esistente";
        $responseData = [
            "success" => 0
        ];
    
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
    else if( $password!=$confermaPassword)
    {
        //echo "Le password non corrispondono";
        $responseData = [
            "success" => 1
        ];
    
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
    else if(strlen($password)<8){
        //echo "Password corta";
        $responseData = [
            "success" => 2
        ];
    
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
    else{
        InsertData($username,$email,$password);
        $responseData = [
            "success" => 3
        ];
    
        header("Content-Type: application/json");
        echo json_encode($responseData);
    }
    
}

function GetSelectUtente($CampoPost){

    global $dbh;
    $sql = "SELECT * FROM `utenti` WHERE `NomeUtente` = " . "'".$CampoPost."'";
    //Prepare the query:
    try{
        
        $query = $dbh->prepare($sql);
        $query->execute();
        $results=$query->fetchAll(PDO::FETCH_OBJ);
        return $results;
        
    }

    catch(Exception $sql){
        return null;
    }
}

function GetEmail($email){
    
    global $dbh;
    $sql1 = "SELECT `Email` FROM `utenti` WHERE Email =  " . "'".$email."'";
    //Prepare the query:
    try{
        
        $query1 = $dbh->prepare($sql1);
        $query1->execute();
        $results=$query1->fetchAll(PDO::FETCH_OBJ);
        return $results;
    }

    catch(Exception $sql1){
        return null;
    }
}

function InsertData($username,$email,$password){
    global $dbh;
    $sql="INSERT INTO `utenti`(`NomeUtente`,`Email`,`Password`) VALUES(:nome,:email,:password)";
    $query = $dbh->prepare($sql);
    
    $query->bindParam(':nome',$username,PDO::PARAM_STR);
    $query->bindParam(':email', $email,PDO::PARAM_STR);
    $query->bindParam(':password', $password,PDO::PARAM_STR);
// Query Execution
    $query->execute();
}
?>