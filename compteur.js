console.log('Bonjour javascript');

var nbclick = 0;

var title = "";

function compteur() {
    nbclick++;
    document.getElementById("nb").textContent = nbclick;
}

document.getElementById("bouton").addEventListener("click", compteur);

function change() {
    if (nbclick > 9){
        var title = "Trainee"
    document.getElementById("name").textContent = title;
    }

    if (nbclick > 50){
        var title = "Advanced"
    document.getElementById("name").textContent = title;
    }
    if (nbclick > 150){
        var title = "Certified"
    document.getElementById("name").textContent = title;
    }
    if (nbclick > 300){
        var title = "Pro"
    document.getElementById("name").textContent = title;
    }
    if (nbclick > 500){
        var title = "Master"
    document.getElementById("name").textContent = title;
    }
    if (nbclick > 1000){
        var title = "GOD"
    document.getElementById("name").textContent = title;
    }
    if (nbclick > 2000){
        var title = "WTF ! WHO YOU ARE ?"
    document.getElementById("name").textContent = title;
    }
}

document.getElementById("bouton").addEventListener("click", change);
