const EmailSubmitButton = document.querySelector("#modifyEmail-password-button");

let code="";

for(let i=0;i<6;i++){
    code+=Math.floor((Math.random()*10)).toString();
}

window.localStorage.setItem('code', code);

EmailSubmitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    var data = {
        em : document.querySelector('#email-modify-password').value,
        cd : code,
        button : EmailSubmitButton,
    };
    console.log(data);
    const response = await fetch('PasswordDGuardaEMail.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        if(data.success){
            window.location.href="PasswordDCode.html";
            window.localStorage.setItem('mail', data.email);
            document.getElementById("infoSuccessEmail").innerHTML="Email non esistente";
        }
        else{
            document.getElementById("infoSuccessEmail").innerHTML="Email non esistente";
        }
    })
});


