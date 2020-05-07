/*2. Definir una función multiplicar que reciba como parámetro una lista de números y
devuelva el resultado de la multiplicación de estos números*/



let aux = 1
let resultado = 1
function multiplicar (listaDeNumeros) {
	
	for (let i=0; i<listaDeNumeros.length; i++) {
		resultado = resultado *listaDeNumeros[i]
	}

	return resultado

}


const listaDeNumeros = [5,6,7,10]

const resultadoMultiplicacion = multiplicar(listaDeNumeros)

console.log(resultadoMultiplicacion)

