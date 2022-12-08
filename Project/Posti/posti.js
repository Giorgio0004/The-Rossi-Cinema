let User =1;
async function CaricaPosti(){
    var data = {
        id : 1,
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
        
        for(let i=0; i<data.success.length;i++){
            if(data.success[i].ID_User !=1){
                //console.log(data.success[i].posto);
                document.getElementById(data.success[i].Posto).style.backgroundColor='#ba990a';
            }
        }

    })
}

function PrenotaPosto(posto){
    document.getElementById(posto.value).style.backgroundColor='#ba990a';
    //document.getElementById(posto.value).disable = true;
}

