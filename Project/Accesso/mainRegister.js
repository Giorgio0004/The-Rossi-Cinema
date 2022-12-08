const RegisterSubmitButton = document.querySelector("#register-submit-button");

RegisterSubmitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    var data1 = {
        uR : document.querySelector('#UtenteR').value,
        eR : document.querySelector('#EmailR').value,
        pR : document.querySelector('#passwordUtenteR').value,
        cpR : document.querySelector('#ConfermapasswordUtenteR').value,
        button : RegisterSubmitButton,
    };
    console.log(data1);
    const response = await fetch('register.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data1)
    })
    .then(res => res.json())
    .then((data) => {
        if(data.success==0){
            document.getElementById("infoSuccessRegister").innerHTML="Utente o Email già esistente";
        }
        else if(data.success==1){
            document.getElementById("infoSuccessRegister").innerHTML="Le password non corrispondono";
        }
        else if(data.success==2){
            document.getElementById("infoSuccessRegister").innerHTML="La password è troppo corta";
        }
        else{
            document.getElementById("infoSuccessRegister").innerHTML="";
            window.location.href = "login.html";
        }
    })
});


var toggle = document.querySelectorAll("#MostraPass");
for (el of toggle) {
    el.addEventListener("click", () => {
        var pw = document.getElementById("passwordUtenteR");
        if (pw.type == "password"){
            pw.type = "text";
        }
        else {
            pw.type = "password";
        }
    });
}