let listaNomi = ["Lorena", "Simone", "Francesco", "Dani"]
for (let indice = 0; indice < listaNomi.length; indice++)
    console.log(listaNomi[indice])

let listaNomi2 = ["Lorena", "Simone", "Francesco", "Dani"]
for (let indice2 = 0; indice2 < listaNomi2.length; indice2++) {
    for (let indice3 = 0; indice3 < listaNomi2[indice2].length; indice3++) {
        console.log(listaNomi2[indice2][indice3])
    }
}

let sommaCumulativa = 0;
for (let i = 1; i <= 200; i++) {
    sommaCumulativa += i
}
console.log("La somma cumulativa dei numeri da 1 a 200 è: " + " " + sommaCumulativa)


for (let ind = 1; ind <= 400; ind++) {
    if (ind % 20 == 0) {
        console.log(ind)

    }
}
