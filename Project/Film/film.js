let arraySessioni;
let indexSessioneSelezionata;
async function CaricaFilms(){
    let data = {
        sql: "SELECT * FROM film",
    };
    const response = await fetch('film.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        //console.log(data.success);
        CreaDiv(data.success);
    })
}

async function CaricaSessioni(ID,divFilm){
    let data = {
        sql : "SELECT sessione.ID,Sala,Data,film.Titolo,film.Copertina FROM `sessione` INNER JOIN film ON ID_Film = film.ID WHERE film.ID = "+ID,
    };
    const response = await fetch('film.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        arraySessioni = data.success;
        for(let i=0; i<data.success.length;i++){
        
            let button = document.createElement("button");
            button.setAttribute("onclick", "Sessione(this)");
            //button.setAttribute("id", "sessione"+i);
            button.setAttribute("value", data.success[i].ID);
            button.setAttribute("class", "div-sessione");
            button.innerHTML = data.success[i].Data + "\n" + data.success[i].Sala;;
            document.getElementById(divFilm).appendChild(button);

        }
    })
}

function CreaDiv(films){
    console.log(films.length);
    for(let i=0;i<films.length;i++){

        //crea div
        let div = document.createElement("div");
        div.setAttribute("id", films[0].Titolo);
        div.setAttribute("class", "div-film");
        document.getElementById("div-films").appendChild(div);

        //crea titolo
        let titolo = document.createElement("h4");
        titolo.innerHTML = films[0].Titolo;
        document.getElementById(films[0].Titolo).appendChild(titolo);

        //crea copertina
        console.log(films[0].Copertina);
        let copertina = document.createElement("img");
        copertina.src = "../../assets/copertine/"+films[0].Copertina;
        document.getElementById(films[0].Titolo).appendChild(copertina);

        //crea genere
        let genere = document.createElement("h4");
        genere.innerHTML = films[0].Genere;
        document.getElementById(films[0].Titolo).appendChild(genere);
        
        //crea regia
        let regia = document.createElement("h4");
        regia.innerHTML = films[0].Regia;
        document.getElementById(films[0].Titolo).appendChild(regia);
        
        //crea cast
        let cast = document.createElement("h4");
        cast.innerHTML = films[0].Cast;
        document.getElementById(films[0].Titolo).appendChild(cast);

        //crea durata
        let durata = document.createElement("h4");
        durata.innerHTML = films[0].Durata;
        document.getElementById(films[0].Titolo).appendChild(durata);

        CaricaSessioni(films[i].ID,films[0].Titolo);
    }    
}


async function Sessione(sessione){
    //passa sessione sui posti
    let FilmScelto = {Titolo:"", Copertina:""};
    for(let i=0; i<arraySessioni.length;i++){
        if(arraySessioni[i].ID == sessione.value){
            FilmScelto.Titolo = arraySessioni[i].Titolo;
            FilmScelto.Copertina = arraySessioni[i].Copertina;
            indexSessioneSelezionata = i;
        }
        
    }
    //console.log(FilmScelto);
    
    //console.log(arraySessioni[indexSessioneSelezionata]);
    let data = {
        infoSessione: arraySessioni[indexSessioneSelezionata],
        FilmSessione: FilmScelto,

    };
    const response = await fetch('film.php', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
        
        if(data.success == "OK"){
            window.location.href = "../Posti/Posti.html";
        }
        //else
    })
}

