async function logOut(){
    var data = {
        message : "exit",
    };

    await fetch('../Accesso/logout.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        
        if(data.success == "OK"){
            window.location.href = "../Film/film.html";
        }
        //else
    })
    
}