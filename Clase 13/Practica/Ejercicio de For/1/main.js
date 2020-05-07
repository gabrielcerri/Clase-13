function imprimirNumeros (numero) {
	let listaDeNumeros = []
	let i = 0
	while (i <= numero ) {
		listaDeNumeros.push(i)
		i++
	}

	return listaDeNumeros
}


const listaNumeros = imprimirNumeros(20)

console.log(listaNumeros)
