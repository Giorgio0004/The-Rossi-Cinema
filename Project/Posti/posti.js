//data sala buttone vai

let User =1;
let posti=[];
let prezzo = 8.70;
let prezzoTotale;
async function CaricaPosti(){
    
    const response = await fetch('posti.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then((data) => {
        //console.log(data);
        document.getElementById("data").innerText = "Data: "+ data.dataSessione.Data + " \nSala: " + data.dataSessione.Sala +"\nFilm: "+ data.dataSessione.Titolo;
        // Posti non disponibili
        for(let i=0; i<data.success.length;i++){
            document.getElementById(data.success[i].Posto).style.backgroundColor='#999999';
            document.querySelector('#'+data.success[i].Posto).disabled = true;
        }

    })
}

function PrenotaPosto(posto){
    //Cambia colore
    if(document.getElementById(posto.value).style.backgroundColor=='transparent' || document.getElementById(posto.value).style.backgroundColor==''){
        document.getElementById(posto.value).style.backgroundColor='#000000';
        posti.push(posto.value);
        
        let div = document.createElement("div");
        div.setAttribute("id", posto.value+"_");
        div.innerHTML=posto.value;
        document.getElementById("div-prezzo-posti").appendChild(div);
        prezzoTotale=prezzo*posti.length;
    }
    else{
        document.getElementById(posto.value).style.backgroundColor='transparent';
        posti.pop(posti);
        let element = document.getElementById(posto.value+'_');
        element.remove();
        prezzoTotale=prezzo*posti.length;
    }
    prezzoTotale=prezzoTotale.toFixed(2);
    document.getElementById("prezzo").innerHTML = prezzoTotale;
}

async function CaricaPostiSession(){
    
    let data = {
        postiSessione: posti,
        prezzo: document.getElementById("prezzo").innerHTML,
    };
    const response = await fetch('posti.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        if(data.success == "OK"){
            window.location.href="../Preview/preview.html";
        }
    })
}
