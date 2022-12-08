var toggle = document.querySelectorAll("#ShowHidePw");
for (el of toggle) {
    el.addEventListener("click", () => {
        var pw = document.getElementById("password");
        if (pw.type == "password"){
            pw.type = "text";
        }
        else {
            pw.type = "password";
        }
    });
}

//login


const loginSubmitButton = document.querySelector("#login-submit-button");

loginSubmitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    var data = {
        username : document.querySelector('#username').value,
        password : document.querySelector('#password').value,
        button : loginSubmitButton,
    };
    console.log(data);
    const response = await fetch('login.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        if(!data.success){
            document.getElementById("infoSuccessLogin").innerText="Username o password sbagliata!";
        }
        else{
            document.getElementById("infoSuccessLogin").innerText="";
            window.location.href = "primaParte.html";
        }
    })
});


