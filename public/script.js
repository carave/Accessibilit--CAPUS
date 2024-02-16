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