function removeImage() {//Fonction qui ferme l'image en supprimant la div overlay
    let divToDelete = document.querySelector('.overlay');//Récupération de la div overlay
    divToDelete.remove();//Suppression de la div overlay
}

function displayImage(dataImage) {//Fonction qui ouvre l'image dans un overlay et qui prend en argument le dataset de l'image
    let divOverlay = document.createElement('div');//Création d'une div
    divOverlay.classList.add('overlay');//Ajout de la class overlay à la div
    document.querySelector('body').appendChild(divOverlay);//Ajout de la div au body en première place

    let img = document.createElement('img');//Création d'une nouvelle image
    img.setAttribute('src', 'images/images-galerie/turtle-'+dataImage+'.png');//Ajout de l'attribut source de l'image avec le dataset
    img.classList.add('zoom');

    divOverlay.appendChild(img);//Ajout de l'image zoomé à la div overlay
    divOverlay.addEventListener('click', function(){
        removeImage()
    });
}

// fonction qui met le champ en rouge (classe CSS "field-invalid") et affiche un message d'erreur en dessous du champ (class css "error-text")
function errorMessage(field) {
    field.classList.add('field-invalid');
    field.nextElementSibling.classList.add('button-invalid');
    let divError = document.createElement('div');

    divError.classList.add('error-text');

    divError.textContent = 'Le champ doit contenir au moins 10 caractères';

    field.nextElementSibling.after(divError);
}

function validForm(field) {
    parent = field.parentElement;
    parent.classList.add('form-registered');
    field.nextElementSibling.remove();
    field.remove();
    parent.textContent = 'Vous avez bien été inscrit à la newsletter';
}

// Attente du chargement de la page
document.addEventListener('DOMContentLoaded', function(){
    //Album
    imgArray = document.querySelectorAll('.photo img');
    imgArray.forEach(img => {//Pour chaque image de la liste
        img.addEventListener('click', function() {//Si l'on click sur l'une d'elle
            let dataImage = img.dataset.image;//On commence par en récupérer le dataset
              displayImage(dataImage);//Dataset qu'on utilisera pour afficher l'image avec la fonction correspondante
            });
      });


    // Sélection du formulaire que nous souhaitons vérifier, nettoyage des erreurs
    form = document.querySelector('#form-register');
    emailAdressField = document.querySelector('#emailAdress');
    // Vérification des champs
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (document.querySelector('.error-text')) {
            document.querySelectorAll('.error-text').remove();
        }
        if (emailAdressField.value.length < 10) {
            errorMessage(emailAdressField);
        }else{
            validForm(emailAdressField);
        }
    })
});