console.log('Bonjour javascript');

var nbclick = 0

function compteur() {
    nbclick++;
    document.getElementById("nb").textContent = nbclick;
}

document.getElementById("bouton").addEventListener("click", compteur);
