var precio = 50000;
var cantidad = 20;
var totalVenta = precio * cantidad;

var descuento = 0;
var totalValorVenta = 0;

if(totalVenta>	877803){
    descuento = totalVenta*0.2;
    totalValorVenta = totalVenta - descuento;
} 

console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + totalValorVenta);
