window.addEventListener("load", init);
let kepIndex=0;
function init() {
    const ARTICLE = document.querySelector("ARTICLE")
    const LISTA = ["DSC7365.jpg", "DSC73711.jpg", "DSC7444.jpg", "DSC7515.jpg"]
    for (let index = 0; index < LISTA.length; index++) {

        ARTICLE.innerHTML += `<div><img src="kepek/${LISTA[index]}"></div>`;
    }
    let image = document.querySelectorAll("ARTICLE div")
    let nagyKep = document.getElementsByClassName("nagykep");
    let jobbGomb = document.getElementsByClassName("jobb");
    let balGomb = document.getElementsByClassName("bal");
    for (let index = 0; index < LISTA.length; index++) {
        image[index].addEventListener('click', () => {
            kepIndex == index;
            nagyKep[0].src = `kepek/${LISTA[index]}`;
        });

    }
    jobbGomb[0].addEventListener('click', () => {
        kepIndex++;
        if (kepIndex > LISTA.length - 1) {
            kepIndex = 0;
        }
        nagyKep[0].src = `kepek/${LISTA[kepIndex]}`;
    });
    balGomb[0].addEventListener('click', () => {
        kepIndex--;
        if (kepIndex < 0) {
            kepIndex = LISTA.length - 1;
        }
        nagyKep[0].src = `kepek/${LISTA[kepIndex]}`;
    });


}