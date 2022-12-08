let code=window.localStorage.getItem('code');

function ControllaCodice(){
    if(code===document.getElementById("code-modify-password").value)
    {
        window.location.href="forgotPassword.html";
    }
    else{
        document.getElementById("infoSuccessEmail").innerHTML="Codice non Corrispondente";
    }
}