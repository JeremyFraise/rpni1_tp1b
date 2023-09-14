/**
 * @file Code pour le défilage tactile ou à la souris su catalogue
 * @author Jeremy Fraser
 * @version 1
 */



// Code grandement inspiré de https://stackabuse.com/how-to-create-a-draggable-carousel-using-vanilla-javascript/



const refDiv = document.querySelector(".container-liste");
const refListe = document.querySelector(".liste");

let blnAppuyer = false; 
let startX;
let x;

// Appel d'évènement
refDiv.addEventListener('mousedown', (e) => {
    blnAppuyer = true;
    console.log(blnAppuyer);
    startX = e.offsetX - refListe.offsetLeft;
    refDiv.style.cursor = "grabbing";
});
refDiv.addEventListener("mouseenter", () => {
    refDiv.style.cursor = "grab";
});
refDiv.addEventListener("mouseup", () => {
    refDiv.style.cursor = "grab";
    blnAppuyer = false;
});
refDiv.addEventListener("mouseleave", () => {
    refDiv.style.cursor = "grab";
    blnAppuyer = false;
});
refDiv.addEventListener("mousemove", (e) => {
    if (!blnAppuyer) return;
    e.preventDefault();

    x = e.offsetX;

    refListe.style.left = `${x - startX}px`;

    checkBoundary();
});

const checkBoundary = () => {
    let outer = refDiv.getBoundingClientRect();
    let inner = refListe.getBoundingClientRect();

    if (parseInt(refListe.style.left) > 0) {
        refListe.style.left = "0px";
    }

    if (inner.right < outer.right) {
        refListe.style.left = `-${inner.width - outer.width}px`;
    }
};