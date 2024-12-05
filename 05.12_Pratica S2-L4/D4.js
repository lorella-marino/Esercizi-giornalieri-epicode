/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
    return l1*l2
}
console.log(area(3,5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1,num2){
    if(num1 === num2) {
        return (num1+num2)*3;
    }  else {
        return num1+num2
    }
}
    
let somma1 = crazySum(3,4)
console.log(somma1)
let somma2 = crazySum(3,3)
console.log(somma2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let y=19
function crazyDiff(x,y){
    if(x > y) {
        return (x-y)*3;
    }  else {
        return Math.abs(x-y)
    }
}

let diffass1 = crazyDiff(10,y)
console.log(diffass1)
let diffass2 = crazyDiff(20,y)
console.log(diffass2)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(20 <= n && n <= 100 || n === 400){
        return "true"
    } else {
        return "false"
    }
}

let bound = boundary(43)
console.log(bound)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if (str.startsWith("EPICODE")){
        return str
    } else {
        return "EPICODE" + " " + str
    }
}

let fraseepi = epify("Ciao a tutti")
console.log(fraseepi)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(nump){
    if (nump%3 === 0 || nump%7 === 0){
        return nump + " " + "è multiplo di 3 o 7"
    } else if (nump<0){
        return "Numero non positivo"
    } else {
        return "Non è multiplo di 3 o 7"
    }
}

let nummultiplo = check3and7(21)
console.log(nummultiplo)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire 
 una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str){
    let arrStr = str.split("");
    let strReverse = arrStr.reverse();
    return strReverse.join ("")
}

let resultreverse = reverseString("EPICODE")
console.log(resultreverse)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){
        let arrStr = str.split(" ");
        let stringaCompleta = []
        for(let i=0; i<arrStr.length; i++) {
        let word = arrStr[i];
        let firstLetter = word.charAt(0).toUpperCase()
        let parolaSenzaLaPrimaLettera = word.slice(1)
        let parolaFinale = firstLetter + parolaSenzaLaPrimaLettera
        stringaCompleta.push(parolaFinale)
        } return stringaCompleta.join("")
}

let resultupperfirst = upperFirst("ciao a tutti")
console.log(resultupperfirst)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str){
    return str.slice (1,-1)
}
let stringatrim = cutString("Ciao a tutti")
console.log(stringatrim)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    return Math.random(n)
}

console.log(giveMeRandom(3))