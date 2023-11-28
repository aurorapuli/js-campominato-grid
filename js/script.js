// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Mi ricavo l'elemento della griglia

const row = document.querySelector('.row');

// mi ricavo l'elemento del bottone

const playButton = document.getElementById('button');

// creo una funzione che mi crei un elemento generale

function createElement (tagElement, classList){

    let newElement = document.createElement (tagElement);

    newElement.classList.add(classList);

    return newElement;

}


// quando clicco play succederanno le seguenti cose

     playButton.addEventListener('click',

      function(){

        

        for (i = 1; i <= 100; i++){

          let col = createElement ('div', 'col');

          col.append(i);

          col.addEventListener ('click',
            function(){

                col.classList.add('lightblue');

                console.log(i);

            });

           row.append (col);

           console.log(col);


        }

        

        

       
});


 
