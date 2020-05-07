/*3. Definir una función calcularPromedio que reciba como parámetro una lista de números y
devuelva el promedio de estos números.*/
let promedio=1

let suma = 0
function calcularPromedio (listaDeNumeros) {
	for (let i=0; i<listaDeNumeros.length;i++){
		suma = suma + listaDeNumeros[i]
		promedio = suma / listaDeNumeros.length
	}

	return promedio
}

const listaDeNumeros = [4,5]

const promedioLista = calcularPromedio(listaDeNumeros)

console.log(promedioLista)