async function logOut(){
    var data = {
        message : "exit"
    };

    await fetch('logout.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });

    window.location.href = "login.html";
}