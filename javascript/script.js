var formEl = document.getElementById("form");
var pi = Math.PI;
var sekk = 12500;
var svarEl = document.getElementById("svar");



formEl.addEventListener("submit", function(e){    
    var data = formEl.elements;
    var ytreRadius = data.ytreDiameter.value / 2;
    var indreRadius = data.indreDiameter.value / 2;
    var lengde = parseFloat(data.lengde.value);
    
    var ytreVolum = volumUtregning(ytreRadius, lengde);
    var indreVolum = volumUtregning(indreRadius, lengde);
    var rørVolum = ytreVolum - indreVolum;
    
    var forhold = Math.ceil(rørVolum/sekk); 
    var pris = forhold * 89;
    
    svarEl.innerHTML = `Hei Alfreds Betong AS. Dere kommer til å trenge ${pris}kr for å kjøpe ${forhold} sekker med B25 betong.`

    e.preventDefault();
})

function volumUtregning(radius, høyde) {
    return pi*(radius*radius)*høyde;
}