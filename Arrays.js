var asistentes = ["Gina", "Juan", "Luz", "Michael"];
var asistencia = [true, true, false, true];

for (var index =0 ;index < asistentes.length; index++) {
    console.log(asistentes[index] + " " + (asistencia[index] == true ? "Asistio" : "No Asistio"));
}