// Evento di scrittura tramite funzione writeText()
var writeTextEvent = new Event('writeText');

// Elementi
var iconThemeEl = document.getElementById('iconThemeSelector');

var linkedinEl = document.getElementById('linkedin');
var githubEl = document.getElementById('github');
var youtubeEl = document.getElementById('youtube');
var instagramEl = document.getElementById('instagram');

var linkedinSideBarEl = document.getElementById('linkedinSideBar');
var githubSideBarEl = document.getElementById('githubSideBar');
var youtubeSideBarEl = document.getElementById('youtubeSideBar');
var instagramSideBarEl = document.getElementById('instagramSideBar');
var ripetizioniSideBarEl = document.getElementById('ripetizioniSideBar');
var homeSideBarEl = document.getElementById('homeSideBar');

var textHeaderEl = document.getElementById('header-text');

// Variabili ausiliare per la funzione writeText()
var longHeaderText = 'Simone Arcari - Computer Science/Automation Control Engineer';
var middleHeaderText = 'Simone Arcari | Automation Control Engineer';
var shortHeaderText = 'Simone Arcari';
var idx = 1;
var speed = 20;
var minWidth_longText = 1150;
var minWidth_middleText = 800;
var minWidth_shortText = 300;
var criticalWidth = 890;    // ricorda che i paramentri di .container sono {width: 700px, max-width: 800px}




/***************************************** MAIN *****************************************/

writeHeaderText();
changeContainerWidth()




/***************************************** HANDLER *****************************************/

// Esegui il codice JavaScript quando la funzione writeText() termina il suo compito
document.addEventListener('writeText', function () {
    setMyElementMarginTop();
});

// Esegui il codice JavaScript quando la pagina è stata caricata
document.addEventListener('DOMContentLoaded', function () {
    setMyElementMarginTop();
});

// Esegui il codice JavaScript quando la finestra del browser viene ridimensionata
window.addEventListener('resize', function () {
    setMyElementMarginTop();
});

// Esegui il codice JavaScript quando la finestra del browser viene ridimensionata
window.addEventListener('resize', function () {
    changeHeaderText();
});

// Esegui il codice JavaScript quando la finestra del browser viene ridimensionata
window.addEventListener('resize', function () {
    changeContainerWidth();
});





/***************************************** FUNCTIONS *****************************************/

// Imposta il valore del margin-top dell'elemento subito sotto l'header
function setMyElementMarginTop() {

    // ottiene altezza effettiva header
    var header = document.querySelector('.headerBar');
    var headerHeight = header.offsetHeight;

    // imposta il valore del margin-top di #sidebarMenu
    var nextElement = document.querySelector('#sidebarMenu');
    nextElement.style.marginTop = headerHeight + 'px';

    // imposta il valore del margin-top di .main-center
    var nextElement = document.querySelector('.main-center');
    nextElement.style.marginTop = headerHeight + 'px';
}

// Scrive un po' alla volta l' header text
function writeHeaderText() {
    let currentText = longHeaderText;

    if (textHeaderEl.offsetWidth <= minWidth_longText) {   // se la largezza (che dipende dal dispositivo) è piccola -> testo medio
        currentText = middleHeaderText;
    }

    if (textHeaderEl.offsetWidth <= minWidth_middleText) {   // se la largezza (che dipende dal dispositivo) è troppo piccola -> testo corto
        currentText = shortHeaderText;
    }

    if (textHeaderEl.offsetWidth <= minWidth_shortText) {   // se la largezza (che dipende dal dispositivo) è estremamente piccola -> testo nullo
        currentText = '';
    }

    textHeaderEl.innerText = currentText.slice(0, idx);
    idx++;
    if (idx <= currentText.length) {
        setTimeout(writeHeaderText, speed);
        document.dispatchEvent(writeTextEvent);
    } else {
        idx = 1;
    }
}

// cambia il testo nella barra (in alto)
function changeHeaderText() {
    let currentText = longHeaderText;

    if (textHeaderEl.offsetWidth <= minWidth_longText) {   // se la largezza (che dipende dal dispositivo) è piccola -> testo medio
        currentText = middleHeaderText;
    }

    if (textHeaderEl.offsetWidth <= minWidth_middleText) {   // se la largezza (che dipende dal dispositivo) è troppo piccola -> testo corto
        currentText = shortHeaderText;
    }

    if (textHeaderEl.offsetWidth <= minWidth_shortText) {   // se la largezza (che dipende dal dispositivo) è estremamente piccola -> testo nullo
        currentText = '';
    }

    textHeaderEl.innerText = currentText;
}

// cambia il valore width di .container in maniera opportuna
function changeContainerWidth() {
    let pageWidth = window.innerWidth;
    
    if (pageWidth < criticalWidth) {
        // Seleziona tutti gli elementi con la classe desiderata
        let elements = document.querySelectorAll('.container');

        // Itera su tutti gli elementi e modifica il parametro width
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = (pageWidth-80) + 'px';
        }
    }
}

// funzione per espandere i div .container
function moreText(buttonId) {

    switch (buttonId) {
        case "moreTextButtonElettronica":
            moreTextId = "moreTextElettronica";
            break;

        case "moreTextButtonAboutMe":
            moreTextId = "moreTextAboutMe";
            break;

        case "moreTextButtonInformatica":
            moreTextId = "moreTextInformatica";
            break;
        
        case "moreTextButtonRobotica":
            moreTextId = "moreTextRobotica";
            break;

        default:
            console.log("Selected fruit is unknown.");
            break;
    }

    let moreTextEl = document.getElementById(moreTextId);
    let moreTextButtonEl = document.getElementById(buttonId);
    let computedStyle = window.getComputedStyle(moreTextEl);

    if (computedStyle.display === "none") {
        moreTextEl.style.display = "inline";
        moreTextButtonEl.innerHTML = "Close";
        console.log("PROVA PROVA....");
    }
    else {
        moreTextEl.style.display = "none";
        moreTextButtonEl.innerHTML = "Read more";
        console.log("problema....");
    }
}




/***************************************** CLICKS *****************************************/

// selezione dark theme
iconThemeEl.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        iconThemeEl.src = "img/sun.png";
    } else {
        iconThemeEl.src = "img/moon.png";
    }
}

// Link cliccabili (tasti menu bar)
linkedinSideBarEl.onclick = function () {
    window.open("https://www.linkedin.com/in/simone-arcari-14319b25b/", '_blank');
}

githubSideBarEl.onclick = function () {
    window.open("https://github.com/simone-arcari", '_blank');
}

youtubeSideBarEl.onclick = function () {
    window.open("https://www.youtube.com/channel/UCRFpI_W660ps-DDMBMKz83A", '_blank');
}

instagramSideBarEl.onclick = function () {
    window.open("https://www.instagram.com/simone_arcari/", '_blank');
}

ripetizioniSideBarEl.onclick = function () {
    window.open("ripetizioni.html");
}

homeSideBarEl.onclick = function () {
    window.open("index.html");
}

// Link cliccabili (tasti tondi)
linkedinEl.addEventListener('click', function () {
    window.open("https://www.linkedin.com/in/simone-arcari-14319b25b/", '_blank');
});

githubEl.addEventListener('click', function () {
    window.open("https://github.com/simone-arcari", '_blank');
});

youtubeEl.addEventListener('click', function () {
    window.open("https://www.youtube.com/channel/UCRFpI_W660ps-DDMBMKz83A", '_blank');
});

instagramEl.addEventListener('click', function () {
    window.open("https://www.instagram.com/simone_arcari/", '_blank');
});


