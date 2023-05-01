var writeTextEvent = new Event('writeText');

var textEl = document.getElementById('text');
var instagramEl = document.getElementsByClassName('instagram');
var githubEl = document.getElementById('github');
var linkedinEl = document.getElementById('linkedin');


console.log(instagramEl);
//var text = 'Simone Arcari - Computer Science/Automation Control Engineer';
var text = 'Simone Arcari';
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

// Link cliccabili
instagramEl.addEventListener('click', function() {
    window.open("https://www.instagram.com/simone_arcari/", '_blank');
})

githubEl.addEventListener('click', function() {
    window.open("https://github.com/simone-arcari", '_blank');
})

linkedinEl.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/simone-arcari-14319b25b/", '_blank');
})