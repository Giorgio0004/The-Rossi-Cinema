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
        console.log(data.success);
        CreaDiv(data.success);
    })
}

async function CaricaSessioni(ID,divFilm){
    let data = {
        sql : "SELECT Sala,Data FROM `sessione` INNER JOIN film ON ID_Film = film.ID WHERE film.ID = "+ID,
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
        for(let i=0; i<data.success.length;i++){
            
            //crea div sessione
            var div = document.createElement("div");
            div.setAttribute("id", "sessione"+i);
            div.setAttribute("onclick", "sessione()");
            div.setAttribute("class", "div-sessione");
            document.getElementById(divFilm).appendChild(div);

            //crea data
            let datatime = document.createElement("h4");
            datatime.innerHTML = data.success[i].Data;
            document.getElementById("sessione"+i).appendChild(datatime);

            //crea sala
            let sala = document.createElement("h4");
            sala.innerHTML = data.success[i].Sala;
            document.getElementById("sessione"+i).appendChild(sala);
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

function sessione(){
    //passa sessione sui posti
}