
let mainBox = document.getElementById("mainBox");
let playBtn = document.getElementById("btnStart");
let userNumber = document.getElementById("btnGiveNumbers");

/* FUNZIONE PER GENERARE NUMERI RANDOM E INSERIRLI NELL'ARRAY */
function generateRandomNum(arrayElements) {
    let arrayNumber = [];
    let number = null;

    while (arrayNumber.length < arrayElements) {

        number = Math.floor(Math.random() * 100) + 1;

        if (!arrayNumber.includes(number)) {
            arrayNumber.push(number);
        }
    }
    return arrayNumber;
}

/* FUNZIONE PER CREARE E INSERIRE ELEMENTI */
function generateElement(sourceArrayName, htmlElement, className) {

    for (let i = 0; i < sourceArrayName.length; i++) {
        const number = sourceArrayName[i];

        let box = document.createElement(htmlElement);
        box.classList.add(className);
        box.append(number);
        mainBox.append(box);
    }

}

/* FUNZIONE PER DISABILITARE/ABILITARE BOTTONE */
function disablePlay(off) {
    if (off) {
        playBtn.setAttribute("disabled", true);
    } else {
        playBtn.removeAttribute("disabled");
    }
}

/* FUNZIONE PER CHIEDERE I NUMERI ALL'UTENTE E PER INSERIRLI NELL'ARRAY */
function getUserNumber(arrayElements) {
    let userNumberArray = [];
    let i = 0;
    while (userNumberArray.length < arrayElements.length) {

        let userNumber = parseInt(prompt(`Inserisci il numero ${i + 1} di ${arrayElements.length}`));

        if (userNumber != null && !isNaN(userNumber)) {
            userNumberArray.push(userNumber);
            i += 1;
        }
    }
    return userNumberArray;

}

/* FUNZIONE PER CONTROLLARE SE I NUMERI DELL'UTENTE 
SONO UGUALI A QUELLI PRESENTI NELL'ARRAY DI NUMERI CASUALI */
function checkArray(array1, array2) {

    let finalArray = [];

    for (let i = 0; i < array1.length; i++) {
        const randomNumber = array1[i];

        if (array2.includes(randomNumber)) {
            finalArray.push(randomNumber);
        }
    }

    return finalArray;
}

/* FUNZIONE PER INSERIRE ELEMENTI NEL DOM */
function insertResult(finalArray) {

    if (finalArray.length <= 1) {
        mainBox.innerHTML =
            `<div class= "resultContainer">
            <p> Hai indovinato ${finalArray.length} numero</p> 
            <p> Il numero è: ${finalArray.toString()}.</p>
            </div>`;
    } else {
        mainBox.innerHTML =
            `<div class= "resultContainer">
            <p> Hai indovinato ${finalArray.length} numeri</p> 
            <p> I numeri sono: ${finalArray.toString()}.</p>
            </div>`;
    }

}



/********************************************** FUNZIONE PRINCIPALE *****************************************************************************/

playBtn.addEventListener("click", function () {

    disablePlay(true);
    mainBox.innerHTML = "";
    let randomNumberArray = generateRandomNum(5);
    generateElement(randomNumberArray, "div", "boxNumber");

    setTimeout(() => { /* Qui viene inserito il timer */
        /* Passano 5 secondi ed esegue i comandi inseriti al suo interno */
        mainBox.innerHTML = "";
        disablePlay(false);
        setTimeout(() => { /* Qui viene inserito un secondo timer */
            /* Questo parte poco dopo lo scadere del primo */
            let userNumberArray = getUserNumber(randomNumberArray);
            let finalArray = checkArray(randomNumberArray, userNumberArray);
            insertResult(finalArray)
        }, 300);
    }, 10 * 1000);
});