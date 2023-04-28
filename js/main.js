
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
/* 
function checkArray */







/* FUNZIONE PRINCIPALE */
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
        }, 100);
        
    }, 5 * 1000);
})