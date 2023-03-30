/*
    `toggleNextElement` har som uppgift att visa eller dölja ett elements
    kommande syskon. I vårt fall när vi klickar på en rubrik (h2) ska det
    nästkommande syskonet (section) visas eller döljas.
*/

function toggleNextElement(event) {
    // 1. Leta upp det nästkommande element-syskonet
    const section = event.target.nextElementSibling;

    // 2. Kontrollera om element visas eller döljs

    // 3.a. Om elementet är dolt - visa det
    if (section.style.display === 'none') {
        section.style.display = 'block';
    }
    // 3.b. Om elemenetet visas - dölj det
    else {
        section.style.display = 'none';
    }
}

/*
    `start` har som uppgift att dölja allt innehåll för våra artiklar och
    ser till att funktionen `toggleNextElement` körs när en användare
    klickar på rubrikerna (h2)
*/
function start() {
    const headings = document.querySelectorAll('h2');

    headings.forEach((heading) => {
        heading.nextElementSibling.style.display = "none"
        heading.addEventListener("click", toggleNextElement);
    })
}

// Kör våran `start` funktion
start();