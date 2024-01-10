//VARIABLE
let mivariable = 0;
const botonNext = document.getElementById("Next");
const botonBack = document.getElementById("Back");
const botonReset = document.getElementById("Reset");
const result = document.getElementById("result");


//FUNCIONES
function next () {
    mivariable = mivariable + 1;
    result!.innerText = String(mivariable).padStart(2, "00");
};

function back () {
    if (mivariable === 0) return;
    mivariable = mivariable - 1;
    result!.innerText = String(mivariable).padStart(2, "00");
};

function reset () {
    mivariable = 0;
    result!.innerText = String(mivariable).padStart(2, "00");
};

//RESULT

if (result !== null && botonNext !== undefined && botonNext instanceof HTMLHeadingElement) {
    botonNext.addEventListener("click", next)
};

if (result !== null && botonBack !== undefined && botonBack instanceof HTMLHeadingElement) {
    botonBack.addEventListener("click", back)
};

if (result !== null && botonReset !== undefined && botonReset instanceof HTMLHeadingElement) {
    botonReset.addEventListener("click", reset)
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