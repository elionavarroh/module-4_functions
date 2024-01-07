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

//EVENTS
const exist = result !== null && result !== undefined && result instanceof HTMLHeadingElement;

if (exist && botonNext !== null && botonNext !== undefined && botonNext instanceof HTMLButtonElement) {
    botonNext.addEventListener("click", next)
};

if (exist && botonBack !== null && botonBack !== undefined && botonBack instanceof HTMLButtonElement) {
    botonBack.addEventListener("click", back)
};

if (exist && botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", reset)
};