/* -----------------------------------------MODAL DISPLAY--------------------------------------------------- */
const modalContainer = document.getElementById('modal-container');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeButton = document.getElementById('close-button');

const especes = document.querySelectorAll('.esp');
const overlays = document.querySelectorAll('.overlay');

//Textes à insérer dans le modal de chaque espèce
const textSneakers = document.getElementById('text-sneakers').innerHTML;
const textTongs = document.getElementById('text-tongs').innerHTML;
const textConverses = document.getElementById('text-converses').innerHTML;
const textSandales = document.getElementById('text-sandales').innerHTML;
const textRollers = document.getElementById('text-rollers').innerHTML;
const textBottes = document.getElementById('text-bottes').innerHTML;

/*Boucle pour que selon la valeur de i, on affiche le modal correspondant au div 'especes[i]'. En d'autres termes : 
lorsqu'on clique sur une des chaussures, on affichee le texte qui correspond, qu'on a écrit avec innerHTML dans chaque if.
Quand i = 2, cela correspond à la 3ème chaussure (car i commence à 0).*/
for (let i = 0; i < especes.length; i++) {
    especes[i].addEventListener('click', () => {
        modalContainer.style.display = "block";
        modalTitle.innerHTML = `~ LES ${overlays[i].innerHTML} ~`;
        if (i === 0) {
            modalText.innerHTML = textSneakers;
        } else if (i === 1) {
            modalText.innerHTML = textTongs;
        } else if (i === 2) {
            modalText.innerHTML = textConverses;
        } else if (i === 3) {
            modalText.innerHTML = textSandales;
        } else if (i === 4) {
            modalText.innerHTML = textRollers;
        } else {
            modalText.innerHTML = textBottes;
        }
    });
}

//Bouton en croix pour fermer le modal quand on clique dessus
closeButton.addEventListener('click', () => {
    modalContainer.style.display = "none";
});
/* ----------------------------------------- END OF MODAL DISPLAY-------------------------------------------- */
//
//
//
//
/* ------------- BUTTON SCROLLTOP ---------------- */

// Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* ------------- END OF BUTTON SCROLLTOP ---------------- */


/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--_-_-_-_*/
/* SOLUTION ALTERNATIVE A TOUS LES if DE LA BOUCLE DU MODAL. A BASE DE switch MAIS QUI NE FONCTIONNE PAS : CHERCHER POURQUOI... :
switch(i) {
    case i === 0:
        modalText.innerHTML = 'SNEAKERS Lorem ipsum';
        break;
    case i === 1:
        modalText.innerHTML = 'TONG lorem ipsum';
        break;
}*/
