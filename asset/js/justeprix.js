const tableauNom = ['Une Chaise', 'Un Costume d\'halloween', 'Un Grill', 'Une Guitare', 'Un Sac à main'];
const tableauImage = ['chaise.png', 'costume-haloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png'];
let proposition;
let prixMystere;
let nbreAleatoire;
let nbrEssaisRestant;
let image = document.getElementById('objet');
let nomImage = document.getElementById('nomObjet');
let affichageTentative = document.getElementById('nbr-essai');
const bouton = document.getElementById('bouton');

var input = document.getElementById("proposition");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("bouton").click();
    }
});

function chiffreAleatoire(valeurMax) { return Math.floor(Math.random() * Math.floor(valeurMax)); }

prixMystere = chiffreAleatoire(100) + 1;
nbreAleatoire = chiffreAleatoire(5);
console.log(prixMystere)
function afficherImage(valeur) {
    return '<img src="asset/image/' + valeur + '"class="img-fluid" width="30%" alt=image">';
}

objet.innerHTML = afficherImage(tableauImage[nbreAleatoire]);
nomObjet.innerHTML = tableauNom[nbreAleatoire];
nbrEssaisRestant = 10;

function verifierProposition() {

    proposition = document.getElementById('proposition').value;
    affichageTentative.innerHTML = "Il vous reste " + nbrEssaisRestant + " tentatives";


    if (nbrEssaisRestant == 0) {
        message.innerHTML = Swal.fire(
            'Bouuuuhhhh!',
            'Vous avez perdu!',
            'error')
        bouton.disabled = true;
    } else {
        if (proposition > prixMystere) {
            message2.innerHTML = "c'est moins!!!!!";
            nbrEssaisRestant = nbrEssaisRestant - 1;
            affichageTentative.innerHTML = "Il vous reste " + nbrEssaisRestant + " tentatives";
        }
        if (proposition < prixMystere) {
            message2.innerHTML = "c'est plus!!!!!";
            nbrEssaisRestant = nbrEssaisRestant - 1;
            affichageTentative.innerHTML = "Il vous reste " + nbrEssaisRestant + " tentatives";
        }
        if (proposition == prixMystere) {
            message2.innerHTML="c'est gagné :)"
            message.innerHTML = Swal.fire(
                'Good job!',
                'Vous avez trouvé le juste prix!',
                'success'
            )

        }
    }
}

bouton.addEventListener('click', verifierProposition, false);


/* <div id="message" class="invisible"></div> 
<div id="message" class="visible"></div> */