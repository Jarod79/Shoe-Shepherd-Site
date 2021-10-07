//Scroll top

//Get the button:
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
  document.documentElement.scrollTop = 0;
}


//Send button with confirmation message
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
  event.preventDefault();
  const confirmation = document.getElementById('confirmation');
  const message = document.getElementById('message');
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const email = document.getElementById('email');
  if(message.value !== '' && firstName.value !== '' && lastName.value !== '' && email.value !== ''){
    confirmation.style.display = "block";
    confirmation.innerHTML = "Votre message a bien été pris en compte. Nous vous remercions.";
    confirmation.style.color = "rgb(5, 107, 5)";
    message.value = '';
  }
  else {
    confirmation.style.display = "block";
    confirmation.innerHTML = "Vous avez oublié de rentrer un champ.";
    confirmation.style.color = "red";
  }
})
