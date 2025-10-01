const nbNombreADeviner = 10; // [1-10]


if (nbNombreADeviner > 5) {
    console.log("le nombre est entre 6 et 10");
    if (nbNombreADeviner <= 7) {
        console.log("le nombre est entre 6 et 7");
        if (nbNombreADeviner === 6) {
            console.log("le nombre est 6")
        } else {
            console.log("Le nombre est 7")
        }
    }
    if (nbNombreADeviner >= 8) {
        console.log("le nombre est entre 8 et 10");
        if (nbNombreADeviner >= 9){
            console.log("le nombre est entre 9 et 10")
        }
        if (nbNombreADeviner === 8) {
            console.log("le nombre est 8")
        }
        if (nbNombreADeviner === 9) {
            console.log("Le nombre est 9")
        } if (nbNombreADeviner === 10){
            console.log("le nombre est 10")
        }
    }
} else if (nbNombreADeviner >= 1 && nbNombreADeviner <= 5) {
    console.log("le nombre est entre 1 et 5")
    if (nbNombreADeviner <= 3) {
        console.log("le nombre est plus petit ou égal à 3")
    } else {
        console.log("le nombre est plus grand que 3")
    }
}