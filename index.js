function zobraz(x){
    switch(x){
        case 1:
            document.getElementById("Modul1").style.display = "block";
            document.getElementById("Uvod").style.display = "none";
            document.getElementById("Modul2").style.display = "none";
            document.getElementById("Modul3").style.display = "none";
            document.getElementById("Modul4").style.display = "none";
            break;
        case 2:
            document.getElementById("Modul2").style.display = "block";
            document.getElementById("Uvod").style.display = "none";
            document.getElementById("Modul1").style.display = "none";
            document.getElementById("Modul3").style.display = "none";
            document.getElementById("Modul4").style.display = "none";
            break;
        case 3:
            document.getElementById("Modul3").style.display = "block";
            document.getElementById("Uvod").style.display = "none";
            document.getElementById("Modul1").style.display = "none";
            document.getElementById("Modul2").style.display = "none";
            document.getElementById("Modul4").style.display = "none";
            break;
        case 4:
            document.getElementById("Modul4").style.display = "block";
            document.getElementById("Uvod").style.display = "none";
            document.getElementById("Modul1").style.display = "none";
            document.getElementById("Modul2").style.display = "none";
            document.getElementById("Modul3").style.display = "none";
            break;
        default:
            document.getElementById("Modul1").style.display = "none";
            document.getElementById("Modul2").style.display = "none";
            document.getElementById("Modul3").style.display = "none";
            document.getElementById("Modul4").style.display = "none";
    }
}
function rozbal(x){

    switch(x){
        case 1:
            document.getElementById("Modul1").style.display = "none";
            break;
        case 2:
            window.open("Tyzden1_pos.html", "_self");
            break;
        case 3:
            break;
        case 4:
            window.open("Tyzden1_posTyzden_1_pos.html", "_self");
            break;
        case 5:
            break;
        case 6:
            window.open("Tyzden1_pos.html");
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        case 21:
            break;
    }
}