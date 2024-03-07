document.addEventListener('DOMContentLoaded', function() {
    var commentForms = document.querySelectorAll('form[id^="commentForm"]');
    commentForms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var commentInput = form.querySelector('input[type="text"]');
            var commentText = commentInput.value;
            var articleNumber = form.id.replace('commentForm', ''); // Récupérer le numéro de l'article
            var commentList = document.querySelector('#commentList' + articleNumber);
            
            // Créer un nouvel élément <li> pour le commentaire
            var newComment = document.createElement('li');
            newComment.textContent = commentText;

            // Ajouter le nouvel élément <li> à la liste des commentaires
            commentList.appendChild(newComment);

            // Effacer le champ de saisie du commentaire après soumission
            commentInput.value = '';
        });
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 