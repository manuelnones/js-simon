/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


    x creare un array di 5 numeri 
    x creare un setInterval di 10 secondi
    x se timer è minore o uguale a 0 
        o fermare il setInterval
        o l' array di numeri scompare
    x creare un prompt che chiede l' array di numeri visualizzati precedentemente
    - se i numeri inseriti nel prompt coincidono con quelli visualizzati precedentemente
        o dire all' utente  che ha inserito i numeri correttamente 
    ALTRIMENTI 
        o dire all' utente quanti numeri erano stati inseriti correttamente  e quali erano quelli sbagliati
*/

let numbers = arrayNumbersGenerator(5, 100);
let timer = 10;
let userNumbers = [];


document.writeln(numbers);
let time = setInterval(contDown, 1000);
setTimeout(isEqual, 11500);





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


function contDown() {
    timer--;


    if (timer < 0) {
        document.writeln(``);
        stopContDown();

    }

};


function stopContDown() {
    clearInterval(time);

};


function createPrompt() {
    for (i = 1; i <= 5; i++) {
        let userNumber = parseInt(prompt(`Inserisci i numeri visti precedentemente`));

        userNumbers.push(userNumber);

    };

    return userNumbers;

};


function isEqual() {
    createPrompt();

    if (userNumbers.toString() === numbers.toString()) {
        document.writeln(`Hai inserito tutti i numeri correttamente`);

    } else {
        document.writeln(`I numeri non sono corretti `);

    }
    
    
    if (userNumbers[0] != numbers[0]) {
        document.writeln(userNumbers[0] + ` non è corretto`);

    } else if (userNumbers[1] != numbers[1]) {
        document.writeln(userNumbers[1] + ` non è corretto`);

    } else if (userNumbers[2] != numbers[2]) {
        document.writeln(userNumbers[2] + ` non è corretto`);

    } else if (userNumbers[3] != numbers[3]) {
        document.writeln(userNumbers[3] + ` non è corretto`);

    } else if (userNumbers[4] != numbers[4]) {
        document.writeln(userNumbers[4] + ` non è corretto`);

    };

};