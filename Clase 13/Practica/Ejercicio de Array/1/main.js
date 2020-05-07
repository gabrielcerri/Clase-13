/*1. Definir una función duplicarNumeros que reciba como parámetro una lista de números y
devuelva la lista con esos números duplicados.*/




function duplicarNumeros (listaDeNumeros){
	for(let i=0;i<listaDeNumeros.length;i++){
		listaDeNumeros[i] = listaDeNumeros[i] * 2
		
	}


	return listaDeNumeros
}





console.log(duplicarNumeros([2,3,4])) 

