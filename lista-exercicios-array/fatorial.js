/*
* 2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial
*/
let numero = parseInt(prompt(`Digite um número inteiro e par`))
let fatorial = 1

for (let i = numero; i > 1; i--) {
    fatorial = (fatorial * i);

}
alert(`o valor desse numerofatorial è ${fatorial}`)