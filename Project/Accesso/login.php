<?php
require_once "../dbConfig.php";


global $dbh;
$data = json_decode(file_get_contents('php://input'), true);
$usn = $data['username'];
$psw = $data['password'];
if(session_status() === PHP_SESSION_NONE){
    if($usn !="" || $psw !=""){

        $results = GetSelectUtente($usn);    
        if($results!=null){
            if($psw === $results[0]->Password){
                session_start();
                $_SESSION["LogIn"]=true;
                $_SESSION["Utente"]=$usn;
                $_SESSION["Password"]=$psw;
                $_SESSION["IDUtente"] = $results[0]->ID;

                $responseData = [
                    "success" => true
                ];
            
                header("Content-Type: application/json");
                echo json_encode($responseData);
            }
            else{
                $responseData = [
                    "success" => false
                ];
            
                header("Content-Type: application/json");
                echo json_encode($responseData);
                //header('Location: http:localhost/ProgettoGruppoTre/Project/login.html');
            }
        }
        else
        {
            $responseData = [
                "success" => false
            ];
        
            header("Content-Type: application/json");
            echo json_encode($responseData); 
        }
    }
}
else{
    header("primaParte");
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

?>