/*

Descrizione:**

Scrivere un programma che chieda all’utente:
    Il numero di chilometri da percorrere
    Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

*/



// Svolgimento

// selezione del nome/cognome
const NoCo = document.querySelector(".NomeCognome");

// selezione del numero di chilometri
const nKilo = document.querySelector(".nKilo");

// scelta dell'età
const nEta = document.querySelector(".nEta");



const calcButton = document.getElementById("calcolo");

const delButton = document.getElementById("cencella");


// Quando viene cliccato il pulsante calcolo
calcButton.addEventListener("click",

    function() {

        let val1 = NoCo.value;
       
        let val2 = nKilo.value;
        
        let val3 = nEta.value;
     

        document.getElementById("none").style="display:block"; 

        document.getElementById("Dati").innerHTML = val1;

        document.getElementById("offerta").innerHTML = "Biglietto standard";

        // chiamo funzione per il calcolo di una stringa (lettere/numeri) casuale
        document.getElementById("CodiceCp").innerHTML = makeid(10);

        // funzione per il calocolo dell prezzo effettivo
        document.getElementById("prezzo").innerHTML = prezzo(val2,val3);
    }

);


// Quando viene cliccato il pulsante annulla
delButton.addEventListener("click",

    function() {

        document.getElementById("none").style="display:none"; 

    }

);

// Funzione per il calcolo di una stringa random
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function prezzo(val2,val3) {

    let eta = val3;
    

    let Kilo = val2;

    let tot = (Kilo * 0.21);

    if (eta == "Minorenne") {

        console.log (eta);
        // Calcolo il 20% del totale
        let totS= ( tot * 20) / 100;
        
        // Sottraggo il 20 % dal totale
        tot = (tot - totS).toFixed(2);
        
        return tot;
        
    }

    else if (eta == "Over") {

        //Calcolo il 40% del totale
        let totS= ( tot * 40) / 100;
        
        // Sottraggo il 40 % dal totale
        tot = (tot - totS).toFixed(2);

        return tot;
    }

    return tot;

}

