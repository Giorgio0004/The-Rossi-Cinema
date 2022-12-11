//passare sia ID film che ID Sessione


let arraySessioni =[];
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
        sql : "SELECT sessione.ID,film.ID AS Film,Sala,Giorno,Ora,film.Titolo,film.Copertina FROM `sessione` INNER JOIN film ON ID_Film = film.ID WHERE film.ID = "+ID,
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
        arraySessioni.push(data.success);

        for(let i=0; i<data.success.length;i++){

            let button = document.createElement("button");
            button.setAttribute("onclick", "Sessione(this)");
            
            button.setAttribute("value", data.success[i].ID);   
            button.setAttribute("class", "bg-transparent hover:bg-gray-500 text-amber-400 py-2 px-4 border border-black hover:border-white rounded mt-4 ml-2");
            button.innerHTML = "Giorno: "+data.success[i].Giorno + "\n"+"Ora: "+data.success[i].Ora+ " Sala: "+ data.success[i].Sala;
            document.getElementById(divFilm).appendChild(button);

        }
    })
}

function CreaDiv(films){
    console.log(films);
    for(let i=0;i<films.length;i++){

        let div = document.createElement("div");
        div.setAttribute("id", films[i].Titolo);
        div.setAttribute("class", "mt-8 text-center");
        document.getElementById("films").appendChild(div);

        let div1= document.createElement("div");
        div1.setAttribute("id", films[i].Titolo+"1");
        div1.setAttribute("class", " bg-gray-800 rounded-xl p-8  hover:bg-gray-700  inline-flex");
        document.getElementById(films[i].Titolo).appendChild(div1);
        
        //crea copertina

        let copertina = document.createElement("img");
        copertina.src = films[i].Copertina;
        copertina.setAttribute("class","max-w-xs w-80");
        document.getElementById(films[i].Titolo+"1").appendChild(copertina);

        //DivInfoFilm
        
        let infoFilmDiv= document.createElement("div");
        infoFilmDiv.setAttribute("id", films[i].Titolo+"2");
        infoFilmDiv.setAttribute("class", "block ml-4 text-start max-w-lg");
        document.getElementById(films[i].Titolo+"1").appendChild(infoFilmDiv);

        //crea titolo
        let titolo = document.createElement("h2");
        titolo.innerHTML = films[i].Titolo;
        titolo.setAttribute("class","text-2xl text-white mt-4")
        document.getElementById(films[i].Titolo+"2").appendChild(titolo);

        //crea genere
        let genere = document.createElement("p");
        genere.innerHTML = "Genere: "+ films[i].Genere;
        genere.setAttribute("class","text-l font-semibold text-gray-500 mt-2");
        document.getElementById(films[i].Titolo+"2").appendChild(genere);
        
        //crea regia
        let regia = document.createElement("p");
        regia.innerHTML = "Regia: "+ films[i].Regia;
        regia.setAttribute("class","text-l font-semibold text-gray-500 mt-2");
        document.getElementById(films[i].Titolo+"2").appendChild(regia);
        
        //crea cast
        let cast = document.createElement("p");
        cast.innerHTML = "Cast: "+films[i].Cast;
        cast.setAttribute("class","text-l font-semibold text-gray-500 mt-2");
        document.getElementById(films[i].Titolo+"2").appendChild(cast);

        //crea durata
        let durata = document.createElement("p");
        durata.innerHTML = "Durata: "+ films[i].Durata;
        durata.setAttribute("class","text-l font-semibold text-gray-500 mt-2");
        document.getElementById(films[i].Titolo+"2").appendChild(durata);

        //crea div Sessioni
        let divSessione = document.createElement("div");
        divSessione.setAttribute("id", films[i].Titolo+"2"+" Sessione");
        //div.setAttribute("class", "mt-8 text-center");
        document.getElementById(films[i].Titolo+"2").appendChild(divSessione);
        
        CaricaSessioni(films[i].ID,films[i].Titolo+"2 Sessione");
    }   
     
}


async function Sessione(sessione){
    //passa sessione sui posti
    let FilmScelto = {Titolo:"", Copertina:""};
    


    console.log(arraySessioni[sessione.value-1]);

    /*for(let i=0; i<arraySessioni.length;i++){
        for(let y=0;y<arraySessioni[0].length;y++){
            console.log(arraySessioni[i].ID);
            if(arraySessioni[i].ID[y] == sessione.value){
                console.log(arraySessioni[i].Titolo);
                FilmScelto.Titolo = arraySessioni[i][y].Titolo;
                FilmScelto.Copertina = arraySessioni[i][y].Copertina;
                indexSessioneSelezionata = i;
            }
        }
        
        
    }
    
    
    
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
    })*/
}
