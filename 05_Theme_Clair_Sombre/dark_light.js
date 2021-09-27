// Gestion des événements
//document.documentElement.setAttribute('data-theme', 'light');
document.getElementById("dark_light").addEventListener("click", darkLight);

function darkLight() {
    if(document.getElementById("body").getAttribute('data-theme') == 'light')
    {
        document.getElementById("body").setAttribute('data-theme', 'dark');
        document.getElementById("dark_light").innerHTML="Mode clair";
    }
    else
    {
        document.getElementById("body").setAttribute('data-theme', 'light');
        document.getElementById("dark_light").innerHTML="Mode sombre";
    }
}
