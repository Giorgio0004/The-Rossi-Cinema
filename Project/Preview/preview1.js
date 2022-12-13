let Postidisplay ="";
let postiGlobal;
async function CaricaPreview(){
    const response = await fetch('preview.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then((data) => {
        
        document.getElementById("acquistoConfermato").innerText = "";
        document.getElementById("PaginaPrincipale").innerText = "";
        document.getElementById("NomeUtente").innerHTML = data.Utente;
        document.getElementById("copertina").src = data.Film.Copertina;
        document.getElementById("titolo").innerText = data.Film.Titolo;
        AggiungiPosti(data);
        //document.getElementById("Posti").innerText = Postidisplay;
        document.getElementById("prezzoTotale").innerHTML = "\n"+data.Prezzo;
    })
}

function AggiungiPosti(posti){
    postiGlobal = posti.Posti;
    for(let i=0;i<posti.Posti.length;i++){
        
        let div = document.createElement("div");
        div.setAttribute("class","bg-transparent hover:bg-gray-500 text-amber-400 py-2 px-4 border border-black hover:border-white rounded mt-8 ml-2")
        div.innerHTML=posti.Posti[i];
        document.getElementById("Posti").appendChild(div);
    }
}

async function InserisciPosti(){
    if(postiGlobal.length>0){
        let data = {
            inserisciPosti : true
        };
        const response = await fetch('preview.php', {
            method: 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
    
            if(data.success == "NO"){
                window.location.href = "../Accesso/login.html";
            }
            else if(data.success == "Ok"){
                ConfermaPagamento();
            }
        })
    }
}


function ConfermaPagamento() {
    document.getElementById("acquistoConfermato").innerText = "Acquisto Confermato!!";
    document.getElementById("PaginaPrincipale").innerText = "Verrai riportato alla Pagina principale!";
    setTimeout(function () {
        
        window.location.href="../Film/film.html";
    }, 5000);
}