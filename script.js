


// let blabla = "caca"

// alert(blabla)


// let lastName = "Jean "

// let firstName = "Louis "

// let city = "l'horme "


// alert("prenom : " + lastName + "Nom de famille " + firstName +
//     "Ville : " + city
// )


// let prenom;

// prenom = prompt()
// alert("Bonjour " + prenom)


// let prneom = prompt()

// let nom = prompt()

// let ville = prompt()

// alert("bonjour " + prneom + nom + " tu viens de " + ville)


// let premierChiffre = prompt("Donne un chiffre")
// let deuxiemeChiffre = prompt("Donne un chiffre")

// premierChiffre = Math.trunc(premierChiffre)
// deuxiemeChiffre = Math.trunc(deuxiemeChiffre)
// alert(premierChiffre * deuxiemeChiffre)



// let maPointure = prompt("quel est t'a pointure");
// let dateDeNaissance = prompt("Quel est t'a date de naissance");

// maPointure *= 2;
// maPointure += 5;
// maPointure *= 50;
// maPointure = maPointure - dateDeNaissance;
// maPointure += 1766;

// console.log(maPointure);



// let monAge = prompt("quel âge a tu ?")

// if(monAge >= 18){
//     alert("vous etes majeur")
// } else{
//     alert("tu es mineur")
// }


let monChiffre = prompt("Donne moi un chiffre")
let stockage;


for(let i = 0; i <= 10; i = i + 1){
stockage = monChiffre

    console.log(monChiffre + " x " + i)
monChiffre = monChiffre * i
console.log(monChiffre)

monChiffre = stockage

}

