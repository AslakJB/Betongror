BigTruckGaming
#0749

BigTruckGaming — Today at 10:37 AM
Hallo
laptop-L-manum01fan — Today at 10:39 AM
let formEl = document.getElementById("form");
let rørSekk = { vekt: 25, liter: 12.5, kost: 89 };
let outputEl = document.getElementById("output");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
Expand
script.js
2 KB
BigTruckGaming — Today at 10:39 AM
wassup baby
take me out to dinner 😉
﻿
let formEl = document.getElementById("form");
let rørSekk = { vekt: 25, liter: 12.5, kost: 89 };
let outputEl = document.getElementById("output");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if(formEl.yDiameter.value > formEl.iDiameter.value) {
        //gir output
        regnAntallPoser(cmTilLiter(regnRørVolumn()), rørSekk.liter, rørSekk.kost);
    } else {
        //feilmelding
        outputEl.innerHTML = "Ytre diameter må være større enn indre diameter."
    }
})
function regnVolum(diameter, lengde) {
    //regner volumet til en sylinder
    return (diameter / 2) ** 2 * lengde * Math.PI;
}
function regnRørVolumn() {
    //finner differansen mellom sylynden sitt ytre og indre volum
    return regnVolum(form.yDiameter.value, form.lengde.value) - regnVolum(form.iDiameter.value, form.lengde.value);
}
function cmTilLiter(kubikkCm) {
    //gjør om til liter
    return kubikkCm / 1000;
}
function regnAntallPoser(volum, liter, pris) {
    //regner antall poser
    i = 1;
    constLiter = liter;
    while (liter < volum) {
        i++;
        liter += constLiter;
    }
    //output
    switch (i) {
        case 1:
            outputEl.innerHTML = "Du må kjøpe " + i + " pose. Det vil koste deg kr " + pris * i + ",-.";
            break;
        default:
            outputEl.innerHTML = "Du må kjøpe " + i + " poser. Det vil koste deg kr " + pris * i + ",-.";
            break;
    }

}
script.js
2 KB