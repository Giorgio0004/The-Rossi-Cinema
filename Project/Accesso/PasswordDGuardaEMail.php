<?php
require "PHPMailer/src/Exception.php";
require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/SMTP.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
require_once "dbConfig.php";

global $dbh;
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['em'];
$code = $data['cd'];

$utenteEsistente = GetEmail($email);

if(sizeof($utenteEsistente)!=0 && $utenteEsistente!=null){
    
    
    sendEmail($email,$code);
    
    $responseData = [
        "success" => true,
        "email"=>$email
    ];
    header("Content-Type: application/json");
    echo json_encode($responseData);
    //header("location: PasswordDCode.html")
}
else{
    $responseData = [
        "success" => false
    ];
    header("Content-Type: application/json");
    echo json_encode($responseData);

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
        exit();
    }
}


function sendEmail($to,$code){
    $mail = new PHPMailer(true);
    
    try {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '2339463e53251b';
        $mail->Password = '3517736bf3478b';
    
        $mail->setFrom('dental.clinic@gmail.com', 'DentalClinic');		
        $mail->addAddress($to);
        
        $mail->isHTML(false);								
        $mail->Subject = 'Reset della Password';
        $mail->Body = 'Richiesta di modifica della password.\n Il codice è:'. $code;
        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>