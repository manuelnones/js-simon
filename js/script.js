/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


    - creare un array di 5 numeri 
    - creare un setInterval di 10 secondi
    - se timer è minore o uguale a 0 
        o fermare il setInterval
        o l' array di numeri scompare
    - creare un prompt che chiede l' array di numeri visualizzati precedentemente
*/

let numbers = arrayNumbersGenerator(5, 100);
let timer = 10;

document.writeln(numbers);
let time = setInterval(contDown, 1000);

if (timer <= 0) {
    stopContDown();
    numbers = [``];
}



//  ------------------ FUNCTION -------------------------------------------------------------

function randomNumberGenerator(lastNumber) {
    let randomNumber = Math.floor(Math.random() * lastNumber + 1);
    
    return randomNumber;
};


function arrayNumbersGenerator(maxNumber, lastNumber) {
    let arrayNumbers = [];

    while (arrayNumbers.length < maxNumber) {
        let randomNumbers = randomNumberGenerator(lastNumber);
        
        if (!arrayNumbers.includes(randomNumbers)) {
            arrayNumbers.push(randomNumbers);
            
        };

    };

    return arrayNumbers;
};


function contDown () {
    console.log(timer);
    timer--;

};


function stopContDown () {
    clearInterval(time);

}