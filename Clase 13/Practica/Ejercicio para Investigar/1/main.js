/*1. Definir calcularVuelto que reciba un precio a pagar y un monto con el que se paga y debe
expresar el vuelto en billetes (cuántos y cuáles), buscando que se entregue la menor
cantidad de billetes posible.*/



 function calcularVuelto (precioAPagar,montoDePago){
 	let array =[]
 	vuelto = montoDePago - precioAPagar
 	billete10P=0
 	billete20P=0
 	billete50P=0
 	billete100P=0
 	billete200P=0
 	billete500P=0
 	billete1000P=0


 	while(vuelto>=1000){
 		billete1000P=billete1000P + 1
 		vuelto = vuelto - 1000
 	}

 	while(vuelto>=500){
 		billete500P=billete500P + 1
 		vuelto= vuelto - 1000
 	}

 	while(vuelto>=200){
 		billete200P = billete200P + 1
 		vuelto = vuelto - 200
 	}

 	while(vuelto>=100){
 		billete100P = billete100P + 1
 		vuelto = vuelto - 100
 	}

 	while (vuelto>=50) {
 		billete50P = billete50P + 1
 		vuelto = vuelto - 50
 	}

 	while (vuelto>=20){
 		billete20P = billete20P + 1
 		vuelto = vuelto - 20
 	}

 	while (vuelto>=10){
 		billete10P = billete10P + 1
 		vuelto = vuelto - 10
 	}

 	console.log('Vuelto:' + billete1000P + ' de mil ')
 	console.log('Vuelto:' + billete500P + ' de quinientos ')
 	console.log('Vuelto:' + billete200P + ' de doscientos ')
 	console.log('Vuelto:' + billete100P + ' de cien ')
 	console.log('Vuelto:' + billete50P + ' de cincuenta ')
 	console.log('Vuelto:' + billete20P + ' de veinte ')
 	console.log('Vuelto:' + billete10P + ' de diez ')
 	console.log('Vuelto:' + vuelto + ' en monedas ' )
 }


const vueltoT =  calcularVuelto (100,600)

console.log(vueltoT)


