// Gestion des événements

document.getElementById("hamburger").addEventListener("click", afficherMasquerBarreNavigation);


// Les fonctions appelées
function afficherMasquerBarreNavigation()
{
    if(document.getElementById("barre_navigation").style.display == "none")
    {
        document.getElementById("barre_navigation").style.display = "grid";
    }
    else
    {
        document.getElementById("barre_navigation").style.display = "none";
    }
}