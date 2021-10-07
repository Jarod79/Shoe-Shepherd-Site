//Bouton scroll//
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}
// Alerte video//
focus();
const listener = window.addEventListener('blur', function() {
    if (document.activeElement === document.getElementById('iframe')) {
      alert("ATTENTION ! \n La vidéo qui suit contient des scènes choquantes pouvant heurter la sensibilité.. \n L'équipe n'est pas responsable des troubles pouvant être occasionés par ces images. \n Bon visionnage")
    }
    window.removeEventListener('blur', listener);
});