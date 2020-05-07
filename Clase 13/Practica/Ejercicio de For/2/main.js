/*Definir una función llamada imprimirOtrosNumeros que reciba dos parámetros: un
número desde y un número hasta. En el caso que el número desde sea menor al
número hasta, debe imprimir en consola todos los números que están entre el primer
parámetro y el segundo. */


function imprimirOtrosNumeros (numero1,numero2) {
	let listaOtrosNumeros = []
	let i = numero1
	let j = numero2
	while (i<=j){
		listaOtrosNumeros.push(i)
		i++
	}

	return listaOtrosNumeros
}

const sonOtrosNumeros = imprimirOtrosNumeros(5,20)

console.log(sonOtrosNumeros)