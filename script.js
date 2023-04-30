var writeTextEvent = new Event('writeText');

var textEl = document.getElementById('text');
console.log(textEl);
var text = 'Simone Arcari - Computer Scinece/Automation Control Engineer';
var idx = 1;
var speed = 300 / 6;


// Esegui il codice JavaScript quando la funzione writeText() termina il suo compito
document.addEventListener('writeText', function () {
    setNextElementMarginTop();
});

// Esegui il codice JavaScript quando la pagina è stata caricata
document.addEventListener('DOMContentLoaded', function () {
    setNextElementMarginTop();
});

// Esegui il codice JavaScript quando la finestra del browser viene ridimensionata
window.addEventListener('resize', function () {
    setNextElementMarginTop();
});


writeText();


// Imposta il valore del margin-top dell'elemento subito sotto l'header
function setNextElementMarginTop() {

    // ottiene altezza effettiva header
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;

    // imposta il valore del margin-top di prova
    var nextElement = document.querySelector('.prova');
    nextElement.style.marginTop = headerHeight + 'px';
}

// Scrive un po' alla volta la classe 'text'
function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx <= text.length) {
        setTimeout(writeText, speed);
        document.dispatchEvent(writeTextEvent);
    }
}