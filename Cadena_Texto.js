var linea = ["Jesus Estrada;36;M;Calle 1 # 2","Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2"];

var datos1 = linea[0].split(";");
var datos2 = linea[1].split(";");
var datos3 = linea[2].split(";");

var num=parseInt(datos1[1]);
var num1=parseInt(datos2[1]);
var num2=parseInt(datos3[1]);

console.log((num+num1+num2)/3); 