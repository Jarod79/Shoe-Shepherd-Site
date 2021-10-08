//Array contenant les images et les titre du slider.
const imgSlide = document.getElementById('slider');
const slideImg = ["img-accueil/Carrousel-logo.jpg", "img-accueil/carrousel1.png", "img-accueil/carrousel2.jpg", "img-accueil/carrousel3.jpeg", "img-accueil/Carrousel-logo.jpg"];
const title = [" ", "DEFEND", "CONSERVE", "PROTECT", " "];

//Création of title to slider impression
const titleSlider = document.createElement('h1');
titleSlider.classList.add('affichage-slider');
imgSlide.appendChild(titleSlider);




let numero = 0;
//Affiche les images du tableaux
const ChangeSlide = (sens) => {
    numero = numero + sens;
    (numero < 0) ? numero = slideImg.length - 1 :
        (numero > slideImg.length - 1) ? numero = 0 :

            document.getElementById('slide').src = slideImg[numero];
    titleSlider.innerHTML = title[numero];
    switch (title[numero]) {
        case (title[1]):
            titleSlider.style.left = "5%";
            titleSlider.style.top = "10%";
            break;
        case (title[2]):
            titleSlider.style.left = "35%";
            titleSlider.style.top = "85%";
            break;
        case (title[3]):
            titleSlider.style.left = "70%";
            titleSlider.style.top = "10%";
            break;
        default:
            break;
    }

}

//Change l'image du carrousel tous les 4 secondes.
setInterval("ChangeSlide(1)", 4000);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ?
        mybutton.style.display = "block" : mybutton.style.display = "none";

}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}