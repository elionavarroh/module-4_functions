//VARIABLE

let mivariable = 0;
const botonNext = document.getElementById("Next");
const botonBack = document.getElementById("Back");
const botonReset = document.getElementById("Reset");
const result = document.getElementById("result");

//FUNCIONES

function next () {
    if (result !== null && result !== undefined && result instanceof HTMLHeadingElement) {
    mivariable = mivariable + 1;
    result.innerText = String(mivariable).padStart(2, "00");
}
};

function back () {
    if (result !== null && result !== undefined && result instanceof HTMLHeadingElement) {
    if (mivariable === 0) {
        console.log("El número es 0, por lo que no puede ir hacia atrás, porque sería negativo");
    } else {
        mivariable = mivariable - 1;
    result.innerText = String(mivariable).padStart(2, "00");
    }
}
};

function reset () {
    if (result !== null && result !== undefined && result instanceof HTMLHeadingElement) {
    mivariable = 0;
    result.innerText = String(mivariable).padStart(2, "00");
}
};

//EVENTS

if (botonNext !== null && botonNext !== undefined && botonNext instanceof HTMLButtonElement) {
    botonNext.addEventListener("click", next)
};

if (botonBack !== null && botonBack !== undefined && botonBack instanceof HTMLButtonElement) {
    botonBack.addEventListener("click", back)
};

if (botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", reset)
};