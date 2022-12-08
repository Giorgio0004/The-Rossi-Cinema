const passwordModifyButton = document.querySelector("#modify-password-button");

passwordModifyButton.addEventListener('click', async (e) => {
    e.preventDefault();
    var data = {
        password : document.querySelector('#password1').value,
        confermaPassword : document.querySelector('#Confermapassword').value,
        mail : window.localStorage.getItem('mail'),
    };
    console.log(data);
    const response = await fetch('PasswordDimenticata.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        if(!data.success){
            document.getElementById("infoSuccessPassword").innerText="Password non corrispondenti o troppo corta(8)";
        }
        else{
            document.getElementById("infoSuccessPassword").innerText="";
            window.location.href = "login.html";
        }
    })
});

var toggle = document.querySelectorAll("#show");
for (el of toggle) {
    el.addEventListener("click", () => {
        var pw = document.getElementById("password1");
        if (pw.type == "password"){
            pw.type = "text";
        }
        else {
            pw.type = "password";
        }
    });
}