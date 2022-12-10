async function CaricaPreview(){
    const response = await fetch('preview.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        document.getElementById("copertina").src = "../../assets/copertine/"+ data.Film.Copertina;
        document.getElementById("Titolo").innerHTML = "\n"+data.Film.Titolo+"\n";
        AggiungiPosti(data);
        document.getElementById("prezzoTotale").innerHTML = "\n"+data.Prezzo+"€";
    })
}

function AggiungiPosti(posti){
    for(let i=0;i<posti.Posti.length;i++){
        
        let div = document.createElement("div");
        div.innerHTML=posti.Posti[i];
        document.getElementById("posti").appendChild(div);
    }

}