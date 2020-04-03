/*Crear un programa para calcular el salario de una persona 
con base en el número de horas trabajadas y el valor de la hora.
Si la persona trabaja más de 40 horas, 
las horas extras deben pagarse con un incremento del 50% 
sobre el valor de la hora normal.*/

var numHoras = 45;
var valorHora = 2000;
var extras = numHoras - 40;
var salario = numHoras * valorHora;
var incremento = 0;

if (extras<=0) {
    extras = 0
}else{
    incremento = extras * (valorHora * 0.50)
}

salario = salario+incremento;
console.log("Total a Pagar: "+salario);