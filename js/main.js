
let mainBox = document.getElementById("mainBox");
let playBtn = document.getElementById("btnStart");
let userNumber = document.getElementById("btnGiveNumbers");

/* FUNZIONE PER GENERARE NUMERI RANDOM E INSERIRLI NELL'ARRAY */
function generateDifferentNumbers(arrayElements) {
    let arrayNumber = [];
    let number = null;

    while (arrayNumber.length < arrayElements) {

        number = Math.floor(Math.random() * 100) + 1;

        if (arrayNumber.includes(number) == false) {
            arrayNumber.push(number);
        }
    }
    return arrayNumber;
}
/* FUNZIONE PER CREARE BOX E INSERIRE NUMERI */
function generateBox(arrayName) {

    for (let i = 0; i < arrayName.length; i++) {
        const number = arrayName[i];

        let box = document.createElement("div");
        box.classList.add("boxNumber");
        box.append(number);
        mainBox.append(box);
    }

}
/* FUNZIONE CHE ELIMINA I NUMERI */
function clear() {
    mainBox.innerHTML = "";

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
    while(userNumberArray.length < arrayElements.length) {

        let userNumber = parseInt(prompt(`Inserisci il numero ${i + 1} di ${arrayElements.length}`));

        if (userNumber!= null  && !isNaN(userNumber)) {
            userNumberArray.push(userNumber);
            i +=1;
        }
    }
    return userNumberArray;

}

/* FUNZIONE PER CONTROLLARE SE I NUMERI DELL'UTENTE 
SONO UGUALI A QUELLI PRESENTI NELL'ARRAY DI NUMERI CASUALI */
function checkArray(array1, array2){

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
function insertResult(finalArray){

    
    mainBox.innerHTML = 
    `<div class= "resultContainer">
        <p> Hai indovinato ${finalArray.length} numeri</p> 
        <p> I numeri sono: ${finalArray.toString()}.</p>
    </div>`
}


/********************************************** FUNZIONE PRINCIPALE *****************************************************************************/

playBtn.addEventListener("click", function () {

    disablePlay(true);
    clear();
    let randomArray = generateDifferentNumbers(5);
    generateBox(randomArray);
    setTimeout(() => {
        clear();
        disablePlay(false);
        setTimeout(() => {
            let userNumberArray = getUserNumber(randomArray);
            let finalArray = checkArray(randomArray, userNumberArray);
            insertResult(finalArray)
        }, 300);
    }, 5 * 1000);
});